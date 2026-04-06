import { readFileSync, writeFileSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const slugify = str =>
  str
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[()]/g, '')
    .replace(/--+/g, '-')
    .replace(/^-+|-+$/g, '');

const pxToRem = px => `${px / 16}rem`;

function loadJSON(filename) {
  const filePath = join(__dirname, '..', '..', 'tokens', filename);
  const fileContent = readFileSync(filePath, 'utf-8');

  return JSON.parse(fileContent);
}

function extractScale(primitives) {
  const scale = {};
  const scaleData = primitives.light_mode.Scale;

  for (const [key, data] of Object.entries(scaleData)) {
    scale[key] = data.value;
  }

  return scale;
}

function resolveTokenValue(tokenRef, scale, alias) {
  // First try to match direct scale reference: {Scale.90}
  const scaleMatch = tokenRef.match(/\{Scale\.(\d+)\}/);
  if (scaleMatch) {
    return scale[scaleMatch[1]];
  }

  // Try to match alias reference: {Text Size.Display.7xl (90)}
  const aliasMatch = tokenRef.match(/\{([^}]+)\}/);
  if (aliasMatch) {
    const path = aliasMatch[1].split('.');
    let current = alias.desktop;

    for (const segment of path) {
      if (current && current[segment]) {
        current = current[segment];
      } else {
        return null;
      }
    }

    // If we found a value object, recursively resolve it
    if (current && typeof current === 'object' && current.value) {
      return resolveTokenValue(current.value, scale, alias);
    }
  }

  return null;
}

function processResponsiveTokens(responsive, alias, scale) {
  const breakpoints = ['desktop', 'tablet', 'mobile'];
  const typography = {};

  for (const breakpoint of breakpoints) {
    if (!responsive[breakpoint]) continue;

    const textJumper = responsive[breakpoint]['Text Jumper']?.['Text Class'];
    const lineHeightJumper = responsive[breakpoint]['Line Height Jumper'];

    if (textJumper) {
      for (const [category, sizes] of Object.entries(textJumper)) {
        const categoryKey = slugify(category);

        if (!typography[categoryKey]) {
          typography[categoryKey] = {};
        }

        for (const [sizeName, data] of Object.entries(sizes)) {
          const sizeKey = slugify(sizeName);

          if (!typography[categoryKey][sizeKey]) {
            typography[categoryKey][sizeKey] = {
              fontSize: {},
              lineHeight: {},
            };
          }

          const fontSizeValue = resolveTokenValue(data.value, scale, alias);
          if (fontSizeValue) {
            typography[categoryKey][sizeKey].fontSize[breakpoint] = fontSizeValue;
          }

          if (lineHeightJumper?.[category]?.[sizeName]) {
            const lineHeightValue = resolveTokenValue(lineHeightJumper[category][sizeName].value, scale, alias);
            if (lineHeightValue) {
              typography[categoryKey][sizeKey].lineHeight[breakpoint] = lineHeightValue;
            }
          }
        }
      }
    }
  }

  return typography;
}

function generateCSSVariables(typography) {
  let css = '  /* Typography Token Variables */\n';

  for (const [category, sizes] of Object.entries(typography)) {
    css += `\n  /* ${category.charAt(0).toUpperCase() + category.slice(1)} */\n`;

    for (const [size, values] of Object.entries(sizes)) {
      // Simplify variable names for text category to avoid --text-text-
      const varCategory = category === 'text' ? '' : `${category}-`;

      if (values.fontSize.desktop) {
        css += `  --text-${varCategory}${size}-desktop: ${pxToRem(values.fontSize.desktop)};\n`;
      }
      if (values.fontSize.tablet) {
        css += `  --text-${varCategory}${size}-tablet: ${pxToRem(values.fontSize.tablet)};\n`;
      }
      if (values.fontSize.mobile) {
        css += `  --text-${varCategory}${size}-mobile: ${pxToRem(values.fontSize.mobile)};\n`;
      }

      if (values.lineHeight.desktop) {
        css += `  --line-height-${varCategory}${size}-desktop: ${pxToRem(values.lineHeight.desktop)};\n`;
      }
      if (values.lineHeight.tablet) {
        css += `  --line-height-${varCategory}${size}-tablet: ${pxToRem(values.lineHeight.tablet)};\n`;
      }
      if (values.lineHeight.mobile) {
        css += `  --line-height-${varCategory}${size}-mobile: ${pxToRem(values.lineHeight.mobile)};\n`;
      }
    }
  }

  return css;
}

function generateUtilityClasses(typography) {
  let css = '\n/* Responsive Typography Utilities */\n\n';

  for (const [category, sizes] of Object.entries(typography)) {
    css += `/* ${category.charAt(0).toUpperCase() + category.slice(1)} Utilities */\n`;

    for (const [size, values] of Object.entries(sizes)) {
      // Simplify naming: text-md instead of text-text-md
      let utilityName;
      if (category === 'text') {
        utilityName = `text-${size}`;
      } else {
        utilityName = `text-${category}-${size}`;
      }

      css += `@utility ${utilityName} {\n`;

      // Simplify variable names for text category to match CSS variables
      const varCategory = category === 'text' ? '' : `${category}-`;

      // Base (mobile)
      const baseFontSize = values.fontSize.mobile || values.fontSize.desktop;
      const baseLineHeight = values.lineHeight.mobile || values.lineHeight.desktop;

      if (baseFontSize) {
        css += `  font-size: var(--text-${varCategory}${size}-mobile);\n`;
      }
      if (baseLineHeight) {
        css += `  line-height: var(--line-height-${varCategory}${size}-mobile);\n`;
      }

      // Tablet
      if (values.fontSize.tablet || values.lineHeight.tablet) {
        css += `\n  @media (min-width: 48rem) {\n`;
        if (values.fontSize.tablet) {
          css += `    font-size: var(--text-${varCategory}${size}-tablet);\n`;
        }
        if (values.lineHeight.tablet) {
          css += `    line-height: var(--line-height-${varCategory}${size}-tablet);\n`;
        }
        css += `  }\n`;
      }

      // Desktop
      if (values.fontSize.desktop || values.lineHeight.desktop) {
        css += `\n  @media (min-width: 64rem) {\n`;
        if (values.fontSize.desktop) {
          css += `    font-size: var(--text-${varCategory}${size}-desktop);\n`;
        }
        if (values.lineHeight.desktop) {
          css += `    line-height: var(--line-height-${varCategory}${size}-desktop);\n`;
        }
        css += `  }\n`;
      }

      css += `}\n\n`;
    }
  }

  return css;
}

function main() {
  console.log('🔤 Loading typography tokens...');

  const primitives = loadJSON('primitives.json');
  const alias = loadJSON('alias.json');
  const responsive = loadJSON('responsive.json');

  console.log('📐 Extracting scale values...');
  const scale = extractScale(primitives);

  console.log('🔄 Processing responsive typography tokens...');
  const typography = processResponsiveTokens(responsive, alias, scale);

  console.log('✨ Generating CSS...');
  const cssVariables = generateCSSVariables(typography);
  const utilityClasses = generateUtilityClasses(typography);

  const typographyPath = join(__dirname, '..', 'theme', 'typography-generated.css');
  const fontVariables = `  /* Font Family Variables */
  --font-sans: var(--font-open-sans);
  --font-serif: var(--font-roboto-slab);
  --font-mono: var(--font-roboto-mono);

  --font-body: var(--font-open-sans);
  --font-heading: var(--font-roboto-slab);
  --font-heading-accent: var(--font-roboto-slab);
  --font-ui: var(--font-open-sans);
  --font-caption: var(--font-open-sans);

`;
  const fullCSS = `/* Auto-generated typography tokens from Figma */\n/* Do not edit directly - run typography-to-tokens.mjs to regenerate */\n\n@theme {\n${fontVariables}${cssVariables}}\n${utilityClasses}`;

  writeFileSync(typographyPath, fullCSS, 'utf-8');

  console.log(`\n✅ Typography tokens written to: ${typographyPath}`);
  console.log('\n📝 Import this file in your global.css:');
  console.log("   @import './typography-generated.css';");
}

main();

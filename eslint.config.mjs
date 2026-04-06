import { fixupPluginRules } from '@eslint/compat';
import eslint from '@eslint/js';
import tsParser from '@typescript-eslint/parser';
import eslintConfigPrettier from 'eslint-config-prettier';
import importPlugin from 'eslint-plugin-import';
import jsxA11Y from 'eslint-plugin-jsx-a11y';
import noInlineStyles from 'eslint-plugin-no-inline-styles';
import noRelativeImportPaths from 'eslint-plugin-no-relative-import-paths';
import preferArrow from 'eslint-plugin-prefer-arrow';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import react from 'eslint-plugin-react';
import globals from 'globals';
import tseslint, { configs as tseslintConfigs } from 'typescript-eslint';

export default tseslint.config([
  {
    ignores: [
      '**/.next/**',
      '**/node_modules/**',
      '**/out/**',
      '**/dist/**',
      '**/build/**',
      'next-env.d.ts',
      'src/lib/graphql/types.ts',
      'src/lib/graphql/sdk.ts',
    ],
  },
  eslint.configs.recommended,
  ...tseslintConfigs.recommended,
  {
    plugins: {
      react: fixupPluginRules(react),
      'jsx-a11y': fixupPluginRules(jsxA11Y),
      'no-inline-styles': noInlineStyles,
      'prefer-arrow': preferArrow,
      'no-relative-import-paths': noRelativeImportPaths,
      import: importPlugin,
    },
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      ecmaVersion: 'latest',
      parser: tsParser,
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node,
        React: true,
        JSX: true,
      },
    },
    settings: {
      react: {
        version: 'detect',
      },
      'import/parsers': {
        '@typescript-eslint/parser': ['.ts', '.tsx'],
      },
      'import/resolver': {
        typescript: {
          project: './tsconfig.json',
        },
        node: {
          extensions: ['.ts', '.tsx', '.js', '.jsx'],
        },
      },
    },
    rules: {
      'array-callback-return': ['error', { allowImplicit: true, checkForEach: true }],
      'arrow-body-style': ['error', 'as-needed'],
      curly: ['error', 'multi', 'consistent'],
      'eol-last': ['error', 'always'],
      eqeqeq: ['error', 'smart'],
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      'func-style': ['error', 'expression'],
      'jsx-quotes': ['error', 'prefer-double'],
      'newline-before-return': 'warn',
      'no-lonely-if': 'error',
      'no-nested-ternary': 'error',
      'no-shadow': ['error', { builtinGlobals: false, hoist: 'functions' }],
      'no-unneeded-ternary': ['error', { defaultAssignment: false }],
      'no-var': 'error',
      'object-shorthand': 'error',
      'prefer-arrow-callback': 'error',
      'prefer-const': ['error', { destructuring: 'all' }],
      quotes: ['error', 'single', { avoidEscape: true, allowTemplateLiterals: false }],
      'sort-imports': ['error', { ignoreDeclarationSort: true }],
      'spaced-comment': ['error', 'always'],

      'no-undef': 'off',
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': ['error', { varsIgnorePattern: '^_', argsIgnorePattern: '^_' }],
      'no-use-before-define': 'off',
      '@typescript-eslint/no-use-before-define': 'error',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/consistent-type-imports': ['error', { fixStyle: 'separate-type-imports' }],

      'import/first': 'error',
      'import/default': 'error',
      'import/no-named-as-default-member': 'warn',
      'import/no-named-default': 'error',
      'import/newline-after-import': 'warn',
      'import/order': [
        'error',
        {
          groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'object', 'type'],
          pathGroups: [
            { pattern: 'components/**', group: 'internal', position: 'after' },
            { pattern: 'lib/**', group: 'internal', position: 'after' },
            { pattern: 'utils/**', group: 'internal', position: 'after' },
            { pattern: 'constants/**', group: 'internal', position: 'after' },
          ],
          alphabetize: { order: 'asc', caseInsensitive: true },
          pathGroupsExcludedImportTypes: ['builtin', 'type'],
          'newlines-between': 'always',
          warnOnUnassignedImports: true,
        },
      ],

      'react/destructuring-assignment': 'error',
      'react/display-name': 0,
      'react/function-component-definition': [
        'warn',
        { namedComponents: 'arrow-function', unnamedComponents: 'arrow-function' },
      ],
      'react/jsx-curly-brace-presence': ['error', { props: 'never', children: 'ignore', propElementValues: 'always' }],
      'react/jsx-filename-extension': [2, { extensions: ['.tsx', '.jsx', '.mdx'] }],
      'react/no-array-index-key': 'warn',
      'react/no-unused-prop-types': 1,
      'react/react-in-jsx-scope': 0,
      'react/require-default-props': [0, { forbidDefaultForRequired: true }],

      'prefer-arrow/prefer-arrow-functions': ['warn', { singleReturnOnly: true }],
      'no-inline-styles/no-inline-styles': 1,
      'no-relative-import-paths/no-relative-import-paths': ['error', { allowSameFolder: false, rootDir: 'src' }],
    },
  },
  {
    files: ['**/*.js', '**/*.mjs', '**/*.ts', '**/*.tsx'],
    ...eslintPluginPrettierRecommended,
    rules: {
      ...eslintConfigPrettier.rules,
    },
  },
]);

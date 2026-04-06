import dynamic from 'next/dynamic';

import type { FC } from 'react';

const Accordion = dynamic(() => import('@/components/accordion'));
const Heading = dynamic(() => import('@/components/heading'));
const Hero = dynamic(() => import('@/components/hero'));
const ImageBlock = dynamic(() => import('@/components/imageBlock'));

type SectionFragment = AccordionFragment | HeadingFragment | HeroFragment | ImageBlockFragment;

type componentGeneratorProps = {
  sections?: (SectionFragment | null)[];
};

const componentGenerator: FC<componentGeneratorProps> = ({ sections }) => (
  <>
    {sections?.map(section => {
      switch (section?.__typename) {
        case 'ComponentAccordion':
          return <Accordion key={section?.sys?.id} {...section} />;
        case 'SectionHeadingBlock':
          return <Heading key={section?.sys?.id} {...section} />;
        case 'SectionHero':
          return <Hero key={section?.sys?.id} {...section} />;
        case 'SectionImageBlock':
          return <ImageBlock key={section?.sys?.id} {...section} />;
        default:
          return null;
      }
    })}
  </>
);

export default componentGenerator;

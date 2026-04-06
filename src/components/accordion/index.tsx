import { type FC } from 'react';

import Button from '@/components/button';

const Accordion: FC<AccordionFragment> = ({
  internalTitle,
  sectionId,
  variant,
  eyebrow,
  heading,
  headingLevel,
  body,
  accordionItemsCollection,
  sectionPadding,
  layout,
  buttonsCollection,
}) => (
  <div className="flex flex-col gap-2 border p-4">
    <div>
      <strong>internalTitle:</strong> {internalTitle}
    </div>
    <div>
      <strong>sectionId:</strong> {sectionId}
    </div>
    <div>
      <strong>variant:</strong> {variant}
    </div>
    <div>
      <strong>eyebrow:</strong> {eyebrow}
    </div>
    <div>
      <strong>heading:</strong> {heading}
    </div>
    <div>
      <strong>headingLevel:</strong> {headingLevel}
    </div>
    <div>
      <strong>body:</strong> {JSON.stringify(body?.json)}
    </div>
    <div>
      <strong>sectionPadding:</strong> {sectionPadding}
    </div>
    <div>
      <strong>layout:</strong> {layout}
    </div>
    <div>
      <strong>accordionItems:</strong>
      {accordionItemsCollection?.items?.map(item => (
        <div key={item?.sys?.id} className="ml-4 border-l pl-2">
          <div>
            <strong>label:</strong> {item?.label}
          </div>
          <div>
            <strong>content:</strong> {JSON.stringify(item?.content?.json)}
          </div>
        </div>
      ))}
    </div>
    <div>
      <strong>buttons:</strong>
      {buttonsCollection?.items?.map(btn => (
        <Button key={btn?.sys?.id} {...btn} />
      ))}
    </div>
  </div>
);

export default Accordion;

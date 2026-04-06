import { type FC } from 'react';

import Button from '@/components/button';

const Heading: FC<HeadingFragment> = ({
  internalTitle,
  sectionId,
  sectionPadding,
  variant,
  eyebrow,
  headingLevel,
  heading,
  body,
  buttonsCollection,
  layout,
}) => (
  <div className="flex flex-col gap-2 border p-4">
    <div>
      <strong>internalTitle:</strong> {internalTitle}
    </div>
    <div>
      <strong>sectionId:</strong> {sectionId}
    </div>
    <div>
      <strong>sectionPadding:</strong> {sectionPadding}
    </div>
    <div>
      <strong>variant:</strong> {variant}
    </div>
    <div>
      <strong>eyebrow:</strong> {eyebrow}
    </div>
    <div>
      <strong>headingLevel:</strong> {headingLevel}
    </div>
    <div>
      <strong>heading:</strong> {heading}
    </div>
    <div>
      <strong>body:</strong> {JSON.stringify(body?.json)}
    </div>
    <div>
      <strong>layout:</strong> {layout}
    </div>
    <div>
      <strong>buttons:</strong>
      {buttonsCollection?.items?.map(btn => (
        <Button key={btn?.sys?.id} {...btn} />
      ))}
    </div>
  </div>
);

export default Heading;

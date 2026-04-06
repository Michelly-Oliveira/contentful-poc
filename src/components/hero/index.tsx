import { type FC } from 'react';

import Button from '@/components/button';

const Hero: FC<HeroFragment> = ({
  internalTitle,
  sectionId,
  sectionPadding,
  variant,
  eyebrow,
  headingLevel,
  heading,
  body,
  buttonsCollection,
  asset,
  assetPosition,
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
      <strong>assetPosition:</strong> {assetPosition}
    </div>
    <div>
      <strong>asset:</strong>
      <div className="ml-4 border-l pl-2">
        <div>
          <strong>url:</strong> {asset?.url}
        </div>
        <div>
          <strong>title:</strong> {asset?.title}
        </div>
        <div>
          <strong>description:</strong> {asset?.description}
        </div>
        <div>
          <strong>width:</strong> {asset?.width}
        </div>
        <div>
          <strong>height:</strong> {asset?.height}
        </div>
      </div>
    </div>
    <div>
      <strong>buttons:</strong>
      {buttonsCollection?.items?.map(btn => (
        <Button key={btn?.sys?.id} {...btn} />
      ))}
    </div>
  </div>
);

export default Hero;

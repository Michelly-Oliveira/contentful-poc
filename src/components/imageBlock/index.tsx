import { type FC } from 'react';

const ImageBlock: FC<ImageBlockFragment> = ({ internalTitle, sectionId, sectionPadding, image, caption }) => (
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
      <strong>image:</strong>
      <div className="ml-4 border-l pl-2">
        <div>
          <strong>url:</strong> {image?.url}
        </div>
        <div>
          <strong>title:</strong> {image?.title}
        </div>
        <div>
          <strong>description:</strong> {image?.description}
        </div>
        <div>
          <strong>width:</strong> {image?.width}
        </div>
        <div>
          <strong>height:</strong> {image?.height}
        </div>
      </div>
    </div>
    <div>
      <strong>caption:</strong> {JSON.stringify(caption?.json)}
    </div>
  </div>
);

export default ImageBlock;

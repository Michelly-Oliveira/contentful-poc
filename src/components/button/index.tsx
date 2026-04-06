import { type FC } from 'react';

const Button: FC<Partial<ButtonFragment>> = ({ buttonText, link, endIcon, variant }) => (
  <div className="flex flex-col gap-1 border p-2">
    <div>
      <strong>buttonText:</strong> {buttonText}
    </div>
    <div>
      <strong>link:</strong> {link}
    </div>
    <div>
      <strong>endIcon:</strong> {endIcon}
    </div>
    <div>
      <strong>variant:</strong> {variant}
    </div>
  </div>
);

export default Button;

import { useEffect, useState } from 'react';

type CopiedValue = string | null;
type CopyFn = (text: string) => void;

const useCopyToClipboard = () => {
  const [value, setClipboard] = useState<CopiedValue>('');

  const copy: CopyFn = text => {
    if (!navigator || !navigator.clipboard) {
      console.warn('Clipboard not supported');
    }

    try {
      navigator.clipboard.writeText(text);
      setClipboard(text);
    } catch (error) {
      console.warn('Copy failed', error);
      setClipboard('');
    }
  };

  const handleCopy = () => {
    const selection = document.getSelection();
    if (selection) {
      setClipboard(selection.toString());
    }
  };

  useEffect(() => {
    document.addEventListener('copy', handleCopy);

    return () => {
      document.removeEventListener('copy', handleCopy);
    };
  });

  return { value, copy };
};

export default useCopyToClipboard;

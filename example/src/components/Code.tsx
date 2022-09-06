import { useEffect, memo, useState } from 'react';
import Prism from 'prismjs';
import 'prismjs/components/prism-jsx';
import 'prism-atom-dark.css';
import { CopyIcon } from 'assets';

const Code = ({
  code,
  language,
  className,
}: {
  code: string;
  language: string;
  className?: string;
}) => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (copied) {
      timeout = setTimeout(() => {
        setCopied(false);
      }, 2000);
    }
    return () => {
      clearTimeout(timeout);
    };
  }, [copied]);

  useEffect(() => {
    Prism.highlightAll();
  }, [code, language, className]);

  return (
    <pre className={`${className} relative`}>
      <div className="cursor-pointer opacity-40 hover:opacity-100 transition-opacity absolute top-0 right-0 mx-4 my-3">
        {copied ? (
          'Copied'
        ) : (
          <CopyIcon
            onClick={() => {
              window.navigator.clipboard.writeText(code);
              setCopied(true);
            }}
          />
        )}
      </div>
      <code className={`language-${language}`}>{code}</code>
    </pre>
  );
};

export default memo(Code);

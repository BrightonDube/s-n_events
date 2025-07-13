import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface MarkdownProps {
  children: string;
  className?: string;
}

const Markdown: React.FC<MarkdownProps> = ({ children, className }) => {
  return (
    <div className={className}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          strong: (props) => <strong className="font-semibold text-brand-accent-light" {...props} />,
          em: (props) => <em className="italic text-brand-primary" {...props} />,
          ul: (props) => <ul className="list-disc ml-6 my-2" {...props} />,
          ol: (props) => <ol className="list-decimal ml-6 my-2" {...props} />,
          li: (props) => <li className="mb-1" {...props} />,
          p: (props) => <p className="mb-2" {...props} />,
        }}
      >
        {children}
      </ReactMarkdown>
    </div>
  );
};

export default Markdown;

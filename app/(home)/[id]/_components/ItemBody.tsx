import React, { ClassAttributes, HTMLAttributes, useState } from "react";
import ReactMarkDown, { ExtraProps } from "react-markdown";
import { CardContent } from "@/components/ui/card";
import SyntaxHighlighter from "react-syntax-highlighter/dist/esm/default-highlight";
import { obsidian } from "react-syntax-highlighter/dist/esm/styles/hljs";
import CopyButton from "./CopyButton";

const ItemBody = ({ body }: { body: string }) => {
  const Pre = ({
    children,
    ...props
  }: ClassAttributes<HTMLPreElement> &
    HTMLAttributes<HTMLPreElement> &
    ExtraProps) => {
    const [showCopyButton, setShowCopyButton] = useState<boolean>(false);
    if (!children || typeof children !== "object") {
      return <code {...props}>{children}</code>;
    }
    const childType = "type" in children ? children.type : "";
    if (childType !== "code") {
      return <code {...props}>{children}</code>;
    }

    const childProps = "props" in children ? children.props : {};
    const { children: code } = childProps;

    return (
      <div
        className="relative"
        onMouseEnter={() => setShowCopyButton(true)}
        onMouseLeave={() => setShowCopyButton(false)}
      >
        <SyntaxHighlighter style={obsidian}>
          {String(code).replace(/\n$/, "")}
        </SyntaxHighlighter>
        {showCopyButton && (
          <CopyButton code={String(code).replace(/\n$/, "")} />
        )}
      </div>
    );
  };

  return (
    <CardContent>
      <ReactMarkDown
        className="markdown"
        components={{
          pre: Pre,
        }}
      >
        {body}
      </ReactMarkDown>
    </CardContent>
  );
};

export default ItemBody;

import React from "react";

function MarkdownPreview({ source }: { source: string }) {
  return (
    <div
      className="!bg-transparent !text-neutral-700 dark:!text-neutral-300 prose-ul:list-inside prose-ul:list-disc prose max-w-none"
      dangerouslySetInnerHTML={{ __html: source }}
    />
  );
}

export default MarkdownPreview;

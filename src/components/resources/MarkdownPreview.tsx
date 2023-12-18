import React from "react";
import snarkdown from "snarkdown";

function MarkdownPreview({ source }: { source: string }) {
  return (
    <div
      className="!bg-transparent !text-neutral-700 dark:!text-neutral-300"
      style={{ whiteSpace: "pre-wrap" }}
      dangerouslySetInnerHTML={{ __html: snarkdown(source) }}
    />
  );
}

export default MarkdownPreview;

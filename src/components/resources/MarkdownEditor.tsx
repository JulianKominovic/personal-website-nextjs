"use client";
import React, { useState } from "react";
import MDEditor from "@uiw/react-md-editor";

function handleCreate(content = "") {
  const memo = {
    content,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    pinned: false,
  };
  fetch("/api/memos", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(memo),
  })
    .then((res) => {
      if (res.ok) {
        window.location.reload();
      }
    })
    .catch(console.error);
}

export default function MarkdownEditorForm() {
  const [value, setValue] = useState("");
  const [previewHTML, setPreviewHTML] = useState("");
  return (
    <>
      <p>Add new resource/memo</p>
      <form
        className="mb-8 flex flex-col items-start justify-start "
        onSubmit={(e) => {
          e.preventDefault();
          handleCreate(
            new FormData(e.target as HTMLFormElement).get("content") as string
          );
        }}
      >
        <MDEditor
          value={value}
          onChange={setValue as any}
          style={{
            fontSize: 18,
            borderRadius: 8,
          }}
          ref={(ref) => {
            const previewElement = ref?.container?.querySelector(
              ".w-md-editor-preview>div"
            );
            if (!previewElement) return;
            setPreviewHTML(previewElement?.innerHTML ?? "");
            (window as any)?.twttr?.widgets?.load(previewElement);
          }}
          className="mb-2 w-full rounded-md [&_.w-md-editor-toolbar__svg]:h-4 [&_.w-md-editor-toolbar__svg]:w-4 [&_.w-md-editor-toolbar__svg]:font-thin [&_.w-md-editor-preview]:prose"
        />
        <textarea hidden name="content" readOnly defaultValue={previewHTML} />
        <button className="rounded-md bg-neutral-100 px-2 py-1 hover:bg-neutral-200 dark:bg-neutral-700 dark:hover:bg-neutral-600">
          Create resource
        </button>
      </form>
    </>
  );
}

// export function MarkdownPreview({ source }: { source: string }) {
//   return (
//     <MDEditor.Markdown
//       source={source}
//       className="!bg-transparent !text-neutral-700 dark:!text-neutral-300"
//       style={{ whiteSpace: "pre-wrap" }}
//       components={{
//         a: ({ node, ...props }) => {
//           return (
//             <a
//               {...props}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-blue-500 underline after:!hidden"
//             />
//           );
//         },
//         img: ({ node, ...props }) => {
//           return (
//             <img
//               {...props}
//               style={{
//                 borderRadius: 8,
//               }}
//               loading="lazy"
//             />
//           );
//         },
//       }}
//     />
//   );
// }

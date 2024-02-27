"use client";
import React, { useState } from "react";
import MDEditor from "@uiw/react-md-editor";
import ResourceCardItem from "./ResourceCardItem";

function handleCreate(content = "") {
  const memo = {
    content,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
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
        className="flex flex-col items-start justify-start mb-8 "
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
          preview="live"
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
        <button className="px-2 py-1 rounded-md bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-700 dark:hover:bg-neutral-600">
          Create resource
        </button>
      </form>

      <p>Preview</p>

      <ResourceCardItem
        isAuth={false}
        resource={{
          user_id: "0",
          id: "0" as any,
          content: previewHTML,
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
          pinned: false,
        }}
      />
    </>
  );
}

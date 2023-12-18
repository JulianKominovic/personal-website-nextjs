"use client";
import * as Popover from "@radix-ui/react-popover";

import React from "react";
import { MemoModelDB } from "@/db/init";

export function ResourceCardItemOptions({
  resource,
}: {
  resource: MemoModelDB;
}) {
  const id = parseInt(
    (resource.id as unknown as string).replace(new RegExp("[^0-9]", "g"), "")
  );
  const isPinned = resource.pinned;
  function handleDelete() {
    fetch("/api/memos/" + id, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (res.ok) {
          location.reload();
        }
      })
      .catch(console.error);
  }
  function handleSetPinned() {
    fetch("/api/memos/" + id, {
      method: "PATCH",
      body: JSON.stringify({
        pinned: !isPinned,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (res.ok) {
          location.reload();
        }
      })
      .catch(console.error);
  }

  return (
    <Popover.Root>
      <Popover.Trigger className="group relative flex-grow">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="icon-img "
        >
          <circle cx="12" cy="5" r="1" />
          <circle cx="12" cy="12" r="1" />
          <circle cx="12" cy="19" r="1" />
        </svg>
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content
          className="min-w-[6em] flex-col rounded-lg bg-white p-2 shadow-md"
          sideOffset={4}
        >
          <button className="flex w-full items-center rounded-md px-2 py-1 hover:bg-neutral-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-2 h-auto w-4"
            >
              <path d="M12 20h9" />
              <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z" />
            </svg>
            Edit
          </button>

          <button className="flex w-full items-center rounded-md px-2 py-1 hover:bg-neutral-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-2 h-auto w-4"
            >
              <polyline points="16 6 12 2 8 6" />
              <>
                <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
                <line x1="12" x2="12" y1="2" y2="15" />
              </>
            </svg>
            Share
          </button>
          <hr className="MuiDivider-root MuiDivider-horizontal css-w2e6ki !my-1" />

          <button
            className="flex w-full items-center rounded-md px-2 py-1 text-green-600  hover:bg-neutral-200"
            onClick={handleSetPinned}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-2 h-auto w-4"
            >
              <line x1="12" x2="12" y1="7" y2="13" />
              <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" />
              <line x1="15" x2="9" y1="10" y2="10" />
            </svg>
            {resource.pinned ? "Unpin" : "Pin"}
          </button>
          <button
            onClick={handleDelete}
            className="flex w-full items-center rounded-md px-2 py-1 text-red-600   hover:bg-neutral-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-2 h-auto w-4"
            >
              <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
              <path d="M3 6h18" />
              <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
            </svg>
            Delete
          </button>
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
}

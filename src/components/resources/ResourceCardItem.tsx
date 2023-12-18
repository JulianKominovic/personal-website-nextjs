"use client";
import * as Popover from "@radix-ui/react-popover";

import React from "react";
import MarkdownPreview from "./MarkdownPreview";
import Image from "next/image";
import { formatTimeAgo } from "@/utils/date";
import { MemoModelDB } from "@/db/init";
import OnlyClientSide from "../shared/OnlyClientSide";

function ResourceCardItemOptions({ resource }: { resource: MemoModelDB }) {
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
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
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
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
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
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
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
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
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
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
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

function ResourceCardItem({
  resource,
  isAuth,
}: {
  resource: MemoModelDB;
  isAuth: boolean;
}) {
  const id = parseInt(
    (resource.id as unknown as string).replace(new RegExp("[^0-9]", "g"), "")
  );
  return (
    <>
      <div className="memo-wrapper memos-3 mb-4 rounded-lg border border-neutral-200 p-6 transition-shadow hover:shadow-md hover:transition-shadow dark:border-neutral-700 bg-neutral-50">
        <div className="memo-top-wrapper relative mb-4 flex w-full justify-between">
          <div className="mr-1 flex w-full max-w-[calc(100%-20px)] flex-col justify-start sm:flex-row sm:items-center">
            <span
              className="flex flex-row items-center justify-start"
              aria-label="Creator"
            >
              <div className="mr-1 !h-5 !w-5  overflow-clip rounded-full">
                <Image
                  className="h-auto min-h-full w-full min-w-full rounded-full object-cover shadow dark:opacity-80"
                  src="/logo-jk.png"
                  width={20}
                  height={20}
                  alt=""
                />
              </div>
              <span className="text-sm text-neutral-600 dark:text-neutral-400">
                JulianKominovic
              </span>
            </span>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="hidden h-auto w-4 text-neutral-400 dark:text-zinc-400 sm:inline-block"
            >
              <circle cx="12.1" cy="12.1" r="1" />
            </svg>
            <OnlyClientSide>
              <span className="select-none text-sm text-neutral-400">
                {formatTimeAgo(resource.updatedAt)}
              </span>
            </OnlyClientSide>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="hidden h-auto w-4 text-neutral-400 dark:text-zinc-400 sm:inline-block"
            >
              <circle cx="12.1" cy="12.1" r="1" />
            </svg>
            <span
              className="text-sm text-neutral-400 dark:text-zinc-400"
              aria-label="Identifier"
            >
              #{id + 1}
            </span>
            {resource.pinned && (
              <>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="hidden h-auto w-4 text-neutral-400 dark:text-zinc-400 sm:inline-block"
                >
                  <circle cx="12.1" cy="12.1" r="1" />
                </svg>

                <span className="text-green-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="mr-2 h-auto w-4"
                  >
                    <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" />
                  </svg>
                </span>
              </>
            )}
          </div>
          {isAuth && <ResourceCardItemOptions resource={resource} />}
        </div>

        <div className="memo-content-wrapper ">
          <MarkdownPreview source={resource.content} />
        </div>
      </div>
    </>
  );
}

export default ResourceCardItem;

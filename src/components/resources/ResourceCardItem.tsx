import React, { forwardRef } from "react";
import MarkdownPreview from "./MarkdownPreview";
import Image from "next/image";
import { formatTimeAgo } from "@/utils/date";
import { MemoModelDB } from "@/db/init";
import OnlyClientSide from "../shared/OnlyClientSide";
import { ResourceCardItemOptions } from "./ResourceCardItemOptions";

const ResourceCardItem = forwardRef(async function ResourceCardItemInner(
  {
    resource,
    isAuth,
  }: {
    resource: MemoModelDB;
    isAuth: boolean;
  },
  ref
) {
  const id = resource.id;

  return (
    <>
      <div className="memo-wrapper memos-3 mb-4 rounded-lg border border-neutral-200 p-6 transition-shadow hover:shadow-md hover:transition-shadow dark:border-neutral-700 bg-card [&__img]:rounded-lg ">
        <div className="relative flex justify-between w-full mb-4 memo-top-wrapper">
          <div className="mr-1 flex w-full max-w-[calc(100%-20px)] flex-col justify-start sm:flex-row sm:items-center">
            <span
              className="flex flex-row items-center justify-start"
              aria-label="Creator"
            >
              <div className="mr-1 !h-5 !w-5  overflow-clip rounded-full">
                <Image
                  className="object-cover w-full h-auto min-w-full min-h-full rounded-full shadow dark:opacity-80"
                  src="/logo-jk.png"
                  width={20}
                  height={20}
                  alt=""
                />
              </div>
              <span className="text-sm text-neutral-600 dark:text-neutral-400">
                {}
              </span>
            </span>

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
              className="hidden w-4 h-auto text-neutral-400 dark:text-zinc-400 sm:inline-block"
            >
              <circle cx="12.1" cy="12.1" r="1" />
            </svg>
            <OnlyClientSide>
              <span className="text-sm select-none text-neutral-400">
                {formatTimeAgo(resource.updated_at)}
              </span>
            </OnlyClientSide>
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
              className="hidden w-4 h-auto text-neutral-400 dark:text-zinc-400 sm:inline-block"
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
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="hidden w-4 h-auto text-neutral-400 dark:text-zinc-400 sm:inline-block"
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
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-4 h-auto mr-2"
                  >
                    <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" />
                  </svg>
                </span>
              </>
            )}
          </div>
          {isAuth && <ResourceCardItemOptions resource={resource} />}
        </div>

        <div className="memo-content-wrapper " ref={ref as any}>
          <MarkdownPreview source={resource.content} />
        </div>
      </div>
    </>
  );
});

export default ResourceCardItem;

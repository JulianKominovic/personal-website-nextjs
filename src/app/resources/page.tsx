import "../../styles/prism-one-light.css";
import { memosDb } from "@/db/init";
import React from "react";
import dynamic from "next/dynamic";
import { cookies } from "next/headers";
import { buildHistoricalActivityRecord } from "@/utils/memos";
import ResourceCardItem from "@/components/resources/ResourceCardItem";
import { ActivityHistory } from "@/components/resources/ActivityHistory";
import OnlyClientSide from "@/components/shared/OnlyClientSide";
const MarkdownEditorForm = dynamic(
  () => import("@/components/resources/MarkdownEditor"),
  { ssr: false }
);
async function ResourcesPage({
  searchParams,
}: {
  searchParams: Record<string, string>;
}) {
  const searchQuery = searchParams["q"] || "";

  const resources = searchQuery
    ? await memosDb.searchContent(searchQuery)
    : await memosDb.selectAll();

  const isAuth =
    cookies().get("auth-cookie")?.value === process.env.AUTH_SECRET;
  console.log({
    searchParams,
    isAuth,
  });

  return (
    <>
      <section className="mb-14">
        <h1 className="text-3xl font-bold">Resources</h1>
        <p>Adding useful resources everyday!</p>
      </section>
      {isAuth && <MarkdownEditorForm />}

      <section className="w-full">
        <form id="search" className="mb-6 flex h-9 items-center gap-4">
          <input
            type="text"
            name="q"
            placeholder="Search..."
            className="h-full w-full rounded-lg border border-neutral-200 px-4 outline-neutral-300 transition-shadow hover:shadow-sm hover:transition-shadow dark:border-neutral-800"
          />
          <button className="h-full rounded-md bg-neutral-200 px-2 py-1 hover:bg-neutral-300 dark:bg-neutral-700 dark:hover:bg-neutral-600">
            Search
          </button>
        </form>
        <OnlyClientSide>
          <ActivityHistory resources={resources} />
        </OnlyClientSide>
      </section>
      {resources?.map((resource) => (
        <ResourceCardItem
          isAuth={isAuth}
          resource={resource}
          key={resource.id}
        />
      ))}
    </>
  );
}

export default ResourcesPage;

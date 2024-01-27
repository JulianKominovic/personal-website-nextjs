import "../../styles/prism-one-light.css";
import { memosDb } from "@/db/init";
import React from "react";
import dynamic from "next/dynamic";
import { cookies } from "next/headers";
import ResourceCardItem from "@/components/resources/ResourceCardItem";
import { ActivityHistory } from "@/components/resources/ActivityHistory";
import OnlyClientSide from "@/components/shared/OnlyClientSide";
import Section from "@/components/shared/Section";
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
    <main className="max-w-3xl mx-auto">
      <Section className="max-w-[80ch] mx-auto mb-52 mt-36">
        <h1 className="text-5xl font-semibold text-center">Resources</h1>
        <h2 className="mb-10 text-2xl text-center text-foreground/80">
          Adding useful resources very frecuently!
        </h2>
      </Section>
      {isAuth && <MarkdownEditorForm />}

      <section className="w-full">
        <form id="search" className="flex items-center gap-4 mb-6 h-9">
          <input
            type="text"
            name="q"
            placeholder="Search..."
            className="w-full h-full px-4 transition-shadow border rounded-sm border-border focus:ring-ring ring-ring outline-ring hover:shadow-sm hover:transition-shadow dark:border-neutral-800 bg-background"
          />
          <button className="h-full px-2 py-1 rounded-md bg-neutral-200 hover:bg-neutral-300 dark:border-neutral-800 dark:bg-background dark:hover:bg-neutral-600">
            Search
          </button>
        </form>
        {/* <OnlyClientSide>
          <ActivityHistory resources={resources} />
        </OnlyClientSide> */}
      </section>

      {resources?.map((resource) => (
        <ResourceCardItem
          isAuth={isAuth}
          resource={resource}
          key={resource.id}
        />
      ))}
    </main>
  );
}

export default ResourcesPage;

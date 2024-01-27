import { PAGE_INDEX, SOCIAL_LINKS } from "@/const";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex flex-col justify-center max-w-5xl px-8 mx-auto my-56 bg-transparent">
      <section>
        <article className="mb-8">
          <h4 className="mb-0 font-semibold">Links</h4>
          <ul className="flex flex-wrap mt-2 gap-x-8 gap-y-2">
            {Object.values(PAGE_INDEX).map((page) => (
              <li key={page.path}>
                <Link
                  href={page.path}
                  className="flex items-center gap-2 text-center text-foreground/80 hover:underline [&__svg]:w-4 [&__svg]:h-4"
                >
                  {page.icon} {page.title}
                </Link>
              </li>
            ))}
          </ul>
        </article>
        <article>
          <h4 className="mb-0 font-semibold">Social</h4>
          <ul className="flex flex-wrap mt-2 gap-x-8 gap-y-2">
            {SOCIAL_LINKS.map((page) => (
              <li key={page.link}>
                <a
                  target="_blank"
                  href={page.link}
                  className="flex items-center gap-2 text-center text-foreground/80 hover:underline [&__svg]:w-4 [&__svg]:h-4"
                >
                  {page.icon} {page.friendlyName}
                </a>
              </li>
            ))}
          </ul>
        </article>
      </section>
      <div id="credits" className="mt-12 text-muted-foreground">
        {"Strongly inspired by "}
        <a href="https://once-ui.com/" className="underline">
          Once UI
        </a>
      </div>
    </footer>
  );
}

import clsx from "clsx";
import Image from "next/image";
import { HTMLAttributeAnchorTarget } from "react";
import { twMerge } from "tailwind-merge";

type BigCardProps = {
  className?: string;
  imageSrc: string;
  title: string;
  description: string;
  href?: string;
  iconSrc?: string;
};
export function BigCardContainer({
  children,
  className,
  href,
  target,
}: {
  children: React.ReactNode;
  className?: string;
  href?: string;
  target?: HTMLAttributeAnchorTarget;
}) {
  const wrapperClassName = twMerge(
    "h-96 w-[720px] flex items-center justify-center mx-auto rounded-md bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/60 to-transparent p-px flex-shrink-0 big-card-shadows group",
    className
  );
  const innerWrapperClassName =
    "bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/20  bg-background to-transparent w-full h-full rounded-md flex flex-col p-2 overflow-hidden";
  if (href)
    return (
      <a href={href} target={target} className={wrapperClassName}>
        <div className={innerWrapperClassName}>{children}</div>
      </a>
    );
  return (
    <article className={wrapperClassName}>
      <div className={innerWrapperClassName}>{children}</div>
    </article>
  );
}
export default function BigCard({
  description,
  imageSrc,
  title,
  className,
  iconSrc,
  href,
}: BigCardProps) {
  return (
    <BigCardContainer href={href} className={className}>
      <header className="w-full h-full overflow-hidden rounded-2xl">
        <Image
          className="object-cover w-full h-auto rounded-lg"
          src={imageSrc}
          alt={title}
          width={760}
          height={320}
        />
      </header>
      <footer className="flex flex-shrink-0 gap-4 px-4 py-3">
        <Image
          src={iconSrc ?? ""}
          alt={title}
          width={48}
          height={48}
          className="w-12 h-12 rounded-lg aspect-square"
        />
        <div>
          <h4 className="text-lg font-medium">{title}</h4>
          <p className="text-muted-foreground">{description}</p>
        </div>
      </footer>
    </BigCardContainer>
  );
}

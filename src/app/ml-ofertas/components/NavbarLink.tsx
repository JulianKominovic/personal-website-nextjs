"use client";
import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";
export default function NavbarLink(
  props: LinkProps & React.HTMLAttributes<HTMLAnchorElement>
) {
  const pathname = usePathname();
  const decodedPathname = decodeURIComponent(pathname);

  return <Link data-active={decodedPathname === props.href} {...props} />;
}

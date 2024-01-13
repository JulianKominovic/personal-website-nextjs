import clsx from "clsx";

export default function Section({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section
      className={clsx(
        "mb-56 relative mx-auto px-8 max-w-screen-xl overflow-visible",
        className
      )}
    >
      {children}
    </section>
  );
}

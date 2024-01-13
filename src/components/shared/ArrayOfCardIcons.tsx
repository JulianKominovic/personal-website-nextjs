import clsx from "clsx";
import Image from "next/image";

export default function ArrayOfCardIcons({
  className,
  cards,
}: {
  className?: string;
  cards: Array<{
    icon: React.ReactNode;
    color: string;
  }>;
}) {
  return (
    <ul className={className}>
      {cards.map((card, index) => {
        return (
          <li
            key={"ca" + index}
            className="relative flex items-center justify-center bg-white bg-opacity-10 w-28 h-64 rounded-3xl [&__svg]:w-12 [&__svg]:h-12 overflow-hidden"
            style={{
              backgroundColor: `${card.color}08`,
            }}
          >
            <div className="absolute top-0 left-0 blur-3xl brightness-200">
              {card.icon}
            </div>
            {card.icon}
            <div
              className={clsx(
                "absolute saturate-200 brightness-200 blur-xl",
                Math.random() > 0.5 ? "bottom-0 left-0" : "top-0 right-0"
              )}
            >
              {card.icon}
            </div>
          </li>
        );
      })}
    </ul>
  );
}

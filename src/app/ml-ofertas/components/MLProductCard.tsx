import { BigCardContainer } from "@/components/shared/BigCard";
import { ScrappedItem } from "@/db/ml-ofertas";
import clsx from "clsx";
import { ArrowUp } from "lucide-react";
import Image from "next/image";
import { calculateDeltaInPercentage } from "../utils";

type MLProductItemProps = {
  priceDeltaVsYesterday: number;
  priceDeltaVs5Days: number;
  image: string;
  title: string;
  url: string;
  seller?: string;
  price: number;
  currency?: string;
};

function buildOfferMessage(deltaPercentage: number) {
  if (deltaPercentage < -30) {
    return `Se rifa 🚀 ${deltaPercentage}%`;
  }
  if (deltaPercentage < -20) {
    return `De remate 🔥🔥🔥 ${deltaPercentage}%`;
  }
  if (deltaPercentage < -10) {
    return `Superoferta 🔥 ${deltaPercentage}%`;
  }
  if (deltaPercentage < 0) {
    return `En oferta 🏷️ ${deltaPercentage}%`;
  }
  if (deltaPercentage === 0) {
    return "Sin cambios";
  }
  if (deltaPercentage > 0) {
    return "En aumento 📈";
  }
  return "";
}
function buildOfferClasses(deltaPercentage: number) {
  // Gradients by deltaPercentage

  if (deltaPercentage < -30) {
    return "bg-gradient-to-tr from-purple-700 to-red-900 border-red-600";
  }
  if (deltaPercentage < -20) {
    return "bg-gradient-to-tr from-red-700 to-orange-900 border-orange-600";
  }
  if (deltaPercentage < -10) {
    return "bg-gradient-to-tr from-blue-700 to-blue-900 border-blue-600";
  }
  if (deltaPercentage < 0) {
    return "bg-gradient-to-tr from-green-700 to-green-900 border-green-600";
  }
  return "bg-gradient-to-tr from-gray-600 to-gray-800";
}

export default function MLProductItem({
  image,
  price,
  priceDeltaVsYesterday,
  priceDeltaVs5Days,
  seller,
  title,
  url,
  currency,
}: MLProductItemProps) {
  const deltaPercentage =
    Math.round(
      (calculateDeltaInPercentage(price, priceDeltaVsYesterday) +
        Number.EPSILON) *
        100
    ) / 100;
  const currencyId = currency || "ARS";
  const intlFormatSettings: Intl.NumberFormatOptions = {
    style: "currency",
    currency: currencyId,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
    // Show the currency code
    currencyDisplay: currency !== "ARS" ? "code" : "narrowSymbol",
  };
  return (
    <BigCardContainer href={url} className="relative flex-grow m-0 w-72 h-96">
      <span
        className={clsx(
          buildOfferClasses(deltaPercentage),
          "absolute px-2 border rounded-full -right-2 -top-2 font-medium"
        )}
      >
        {buildOfferMessage(deltaPercentage)}
      </span>
      <div className="w-full overflow-hidden h-52">
        <Image
          className="flex-shrink-0 object-cover w-full h-full rounded-sm"
          alt={title}
          height={200}
          src={image}
          width={200}
          loading="lazy"
        />
      </div>
      <div className="mt-4">
        <h3 className="font-medium line-clamp-2">{title}</h3>
        <small className="text-muted-foreground/60">
          Vendido por: {seller}
        </small>
        <p className="mt-2">
          {Intl.NumberFormat(undefined, intlFormatSettings).format(price)}{" "}
          <small
            className={clsx(
              "px-1 py-0.5 rounded-sm",
              priceDeltaVsYesterday > 0
                ? "text-red-600"
                : priceDeltaVsYesterday === 0
                ? "text-muted-foreground bg-card-background"
                : "text-green-600 bg-destructive-background"
            )}
          >
            <span className="h-3 ">
              {priceDeltaVsYesterday > 0 ? (
                <ArrowUp height="1em" width="1em" className="inline-block" />
              ) : priceDeltaVsYesterday === 0 ? (
                "~"
              ) : (
                <ArrowUp
                  height="1em"
                  width="1em"
                  className="inline-block rotate-180"
                />
              )}
            </span>
            {Intl.NumberFormat(undefined, intlFormatSettings).format(
              priceDeltaVsYesterday
            )}{" "}
            {"vs. ayer"}
          </small>
          <small
            className={clsx(
              "px-1 py-0.5 rounded-sm block",
              priceDeltaVs5Days > 0
                ? "text-red-600"
                : priceDeltaVs5Days === 0
                ? "text-muted-foreground bg-card-background"
                : "text-green-600 bg-destructive-background"
            )}
          >
            <span className="h-3 ">
              {priceDeltaVs5Days > 0 ? (
                <ArrowUp height="1em" width="1em" className="inline-block" />
              ) : priceDeltaVs5Days === 0 ? (
                "~"
              ) : (
                <ArrowUp
                  height="1em"
                  width="1em"
                  className="inline-block rotate-180"
                />
              )}
            </span>
            {Intl.NumberFormat(undefined, intlFormatSettings).format(
              priceDeltaVs5Days
            )}{" "}
            {"vs. últimos 5 días"}
          </small>
        </p>
      </div>
    </BigCardContainer>
  );
}

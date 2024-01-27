import BigCard, { BigCardContainer } from "@/components/shared/BigCard";
import Section from "@/components/shared/Section";
import { getProductsByCategory, type ScrappedItem } from "@/db/ml-ofertas";
import clsx from "clsx";
import { ArrowDown, ArrowUp } from "lucide-react";
import Image from "next/image";

type MLProductItemProps = {
  priceDeltaVsYesterday: number;
  priceDeltaVs5Days: number;
  image: string;
  title: string;
  url: string;
  seller?: string;
  price: number;
};
function calculateDeltaInPercentage(total: number, priceDelta: number) {
  return (priceDelta / total) * 100;
}
function getLatestPrice(price_history: ScrappedItem["price_history"]) {
  return Object.entries(price_history).sort((a, b) => {
    return new Date(b[0]).getTime() - new Date(a[0]).getTime();
  })[0][1];
}
function MLProductItem({
  image,
  price,
  priceDeltaVsYesterday,
  priceDeltaVs5Days,
  seller,
  title,
  url,
}: MLProductItemProps) {
  const deltaPercentage = calculateDeltaInPercentage(
    price,
    priceDeltaVsYesterday
  );
  console.log(deltaPercentage);
  return (
    <BigCardContainer href={url} className="relative m-0 w-72 h-96">
      <span
        className={clsx(
          deltaPercentage < 0
            ? deltaPercentage < -10
              ? "text-green-400 bg-green-900"
              : "text-blue-400 bg-blue-900"
            : deltaPercentage === 0
            ? "text-muted-foreground bg-card"
            : "text-destructive-foreground bg-destructive",
          "absolute px-2 text-sm border rounded-full -right-2 -top-2"
        )}
      >
        {deltaPercentage < 0
          ? deltaPercentage < -10
            ? "Superoferta 🔥"
            : "En oferta 🏷️"
          : deltaPercentage === 0
          ? "Sin cambios"
          : "En aumento 📈"}
      </span>
      <div className="w-full overflow-hidden h-52">
        <Image
          className="flex-shrink-0 object-cover w-full h-full rounded-sm"
          alt={title}
          height={200}
          src={image}
          width={200}
        />
      </div>
      <div className="mt-4">
        <h3 className="font-medium line-clamp-2">{title}</h3>
        <small className="text-muted-foreground/60">
          Vendido por: {seller}
        </small>
        <p className="mt-2">
          {Intl.NumberFormat(undefined, {
            style: "currency",
            currency: "ARS",
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
          }).format(price)}{" "}
          <small
            className={clsx(
              "px-1 py-0.5 rounded-sm",
              priceDeltaVsYesterday > 0
                ? "text-secondary-foreground bg-secondary-background"
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
            {Intl.NumberFormat(undefined, {
              style: "currency",
              currency: "ARS",
              currencyDisplay: "narrowSymbol",
              minimumFractionDigits: 0,
              maximumFractionDigits: 0,
            }).format(priceDeltaVsYesterday)}{" "}
            {"vs. ayer"}
          </small>
        </p>
      </div>
    </BigCardContainer>
  );
}

export default async function Page({ searchParams }: any) {
  const products = await getProductsByCategory();
  console.log(products);
  return (
    <Section className="max-w-[80ch] mx-auto mb-52 mt-36">
      <h1 className="mb-4 text-5xl font-semibold text-center">Mercadofertas</h1>

      <p className="mb-4 mb-8 text-xl text-center text-muted-foreground">
        Mirá las ofertas de Mercado Libre en un solo lugar. Seguí la evolución
        de precios que estan teniendo los productos más destacados.
      </p>
      <div className="flex flex-wrap gap-4">
        {
          // @ts-ignore
          products.map((product) => (
            <MLProductItem
              key={product.id}
              image={product.image}
              price={getLatestPrice(product.price_history) ?? 0}
              priceDeltaVsYesterday={product.price_delta_vs_yesterday ?? 0}
              priceDeltaVs5Days={product.price_delta_vs_last_five_days ?? 0}
              seller={product.seller}
              title={product.name}
              url={product.link}
            />
          ))
        }
      </div>
    </Section>
  );
}

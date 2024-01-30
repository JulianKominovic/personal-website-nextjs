import { ScrappedItem } from "@/db/ml-ofertas";

export function calculateDeltaInPercentage(total: number, priceDelta: number) {
  return (priceDelta / total) * 100;
}
export function getLatestPrice(price_history: ScrappedItem["price_history"]) {
  return Object.entries(price_history).sort((a, b) => {
    return new Date(b[0]).getTime() - new Date(a[0]).getTime();
  })[0][1];
}

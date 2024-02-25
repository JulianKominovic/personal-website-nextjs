import { ScrappedItem, findDiscountsByParentCategory } from "@/db/ml-ofertas";
import { calculateDeltaInPercentage, getLatestPrice } from "../utils";
import VirtualList from "@/components/shared/VirtualList";
import { firstLetterToUpperCase } from "@/utils/string";
import MLProductItem from "../components/MLProductCard";

export const dynamic = "force-dynamic";

const sortByPriceDeltaPercentage = (a: ScrappedItem, b: ScrappedItem) => {
  const aLatestPrice = getLatestPrice(a.price_history);
  const bLatestPrice = getLatestPrice(b.price_history);
  const aDelta = calculateDeltaInPercentage(
    aLatestPrice,
    a.price_delta_vs_last_five_days ?? 0
  );
  const bDelta = calculateDeltaInPercentage(
    bLatestPrice,
    b.price_delta_vs_last_five_days ?? 0
  );
  return aDelta - bDelta;
};
export default async function MLCategoryPage({ params }: any) {
  const category = decodeURIComponent(params.category);
  const productsInDiscount = await findDiscountsByParentCategory(category);

  return productsInDiscount.length > 0 ? (
    <VirtualList>
      <div className="mb-8" key={category}>
        <h3 id={category} className="mb-4 text-xl font-semibold text-left">
          {firstLetterToUpperCase(category)}
        </h3>
      </div>
      <div className="flex flex-wrap justify-start gap-8">
        {productsInDiscount.sort(sortByPriceDeltaPercentage).map((product) => (
          <MLProductItem
            key={product.id}
            image={product.image}
            price={getLatestPrice(product.price_history) ?? 0}
            priceDeltaVsYesterday={product.price_delta_vs_yesterday ?? 0}
            priceDeltaVs5Days={product.price_delta_vs_last_five_days ?? 0}
            seller={product.seller}
            title={product.name}
            url={product.link}
            currency={product.currency_id}
          />
        ))}
      </div>
    </VirtualList>
  ) : (
    <p className="text-center">No hay productos en oferta</p>
  );
}

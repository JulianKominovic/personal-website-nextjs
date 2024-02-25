import GoToTop from "@/components/shared/GoToTop";
import Section from "@/components/shared/Section";
import { ML_CATEGORIES_MAP } from "@/const/ml-categories";
import { getDiscountsCountByCategory, getMetadata } from "@/db/ml-ofertas";
import { formatNumber } from "@/utils/number";
import { firstLetterToUpperCase } from "@/utils/string";
import NavbarLink from "./components/NavbarLink";

// async function FirstTenProductsByCategory({
//   category,
// }: {
//   category: keyof typeof ML_CATEGORIES_MAP;
// }) {
//   const products = await getFirstTenProductGrouppedByCategory(category);
//   return products.map((product) => (
//     <MLProductItem
//       key={product.id}
//       image={product.image}
//       price={getLatestPrice(product.price_history) ?? 0}
//       priceDeltaVsYesterday={product.price_delta_vs_yesterday ?? 0}
//       priceDeltaVs5Days={product.price_delta_vs_last_five_days ?? 0}
//       seller={product.seller}
//       title={product.name}
//       url={product.link}
//     />
//   ));
// }

export default async function Page({ children }: any) {
  //   const rawProductsInDiscount = await getDiscountsByCategory();
  const discountCountByCategory = await getDiscountsCountByCategory();
  const flattenedCountByCategory = new Map();

  discountCountByCategory.forEach(({ category }) => {
    const humanizedCategoryId =
      ML_CATEGORIES_MAP[category as keyof typeof ML_CATEGORIES_MAP];
    if (!humanizedCategoryId) return;
    const rootPath = humanizedCategoryId
      .split(">", 1)?.[0]
      ?.trim()
      ?.toLowerCase();
    const savedCount = flattenedCountByCategory.get(rootPath);
    if (savedCount) {
      flattenedCountByCategory.set(rootPath, savedCount + 1);
    } else {
      flattenedCountByCategory.set(rootPath, 1);
    }
  });
  const flattenedCountByCategoryArray = [...flattenedCountByCategory.entries()];

  const {
    responseTime,
    totalCategories,
    totalProducts,
    totalDiscounts,
    totalIncresed,
  } = await getMetadata();
  //   const flattenedProductsInDiscountCategories = new Map();
  //   const productsInDiscount = [...rawProductsInDiscount.entries()].filter(
  //     ([_, items]) => items.length > 0
  //   );

  //   productsInDiscount.forEach(([key, products]) => {
  //     const humanizedCategoryId =
  //       ML_CATEGORIES_MAP[key as keyof typeof ML_CATEGORIES_MAP];
  //     if (!humanizedCategoryId) return null;
  //     const rootPath = humanizedCategoryId
  //       .split(">", 1)?.[0]
  //       ?.trim()
  //       ?.toLowerCase();
  //     if (!rootPath) return null;
  //     if (flattenedProductsInDiscountCategories.has(rootPath)) {
  //       flattenedProductsInDiscountCategories.get(rootPath).push(...products);
  //     } else {
  //       flattenedProductsInDiscountCategories.set(rootPath, products);
  //     }
  //   });
  //   const flattenedProductsInDiscountCategoriesArray = [
  //     ...flattenedProductsInDiscountCategories.entries(),
  //   ];

  return (
    <Section className="max-w-[80ch] mx-auto mb-52 mt-36">
      <h1 className="mb-4 text-5xl font-semibold ">Mercadofertas</h1>

      <p className="mb-8 text-xl text-muted-foreground">
        Mirá las ofertas de Mercado Libre en un solo lugar. Seguí la evolución
        de precios que estan teniendo los productos más destacados.
      </p>

      <div className="flex flex-wrap gap-4 my-24 text-muted-foreground">
        <div className="flex flex-col justify-center flex-grow p-4 border rounded-md bg-card border-border">
          observamos
          <span className="block text-4xl font-semibold text-foreground">
            {formatNumber(totalProducts)} {"🔎"}
          </span>
          productos a diario
        </div>
        <div className="flex flex-col justify-center flex-grow p-4 border rounded-md bg-card border-border">
          analizamos
          <span className="block text-4xl font-semibold text-foreground">
            {formatNumber(totalCategories)} {"📊"}
          </span>
          categorías y subcategorias
        </div>
        <div className="flex flex-col justify-center flex-grow p-4 border rounded-md bg-card border-border">
          encontramos
          <span className="block text-4xl font-semibold text-foreground">
            {formatNumber(totalDiscounts)} {"🏷️"}
          </span>
          descuentos para vos
        </div>
        <div className="flex flex-col justify-center flex-grow p-4 border rounded-md bg-card border-border">
          descartamos
          <span className="block text-4xl font-semibold text-foreground">
            {formatNumber(totalIncresed)} {"📈"}
          </span>
          productos con aumentos
        </div>
      </div>

      <h2 className="mt-24 mb-1 text-2xl font-semibold">
        Productos en oferta 👀
      </h2>
      <p className="mb-4 text-muted-foreground">
        Cantidad de productos en oferta distinguido por categorías
      </p>
      <nav className="grid grid-cols-[repeat(auto-fit,minmax(30ch,1fr))] mt-8 mb-12 gap-y-4 gap-x-8">
        {flattenedCountByCategoryArray.map(([category, productsInDiscount]) => (
          <NavbarLink
            key={category}
            prefetch={false}
            href={`/ml-ofertas/${category}`}
            className="flex-grow inline-block w-fit pr-2 text-sm font-medium text-blue-500 rounded-sm hover:text-blue-200 group data-[active='true']:font-semibold data-[active='true']:bg-white data-[active='true']:text-black"
          >
            <span className="px-1.5 mr-1 group-data-[active='true']:bg-white group-data-[active='true']:text-black bg-blue-600 rounded-sm text-white font-semibold">
              {productsInDiscount}
            </span>
            {firstLetterToUpperCase(category)}{" "}
          </NavbarLink>
        ))}
      </nav>

      {children}
      <GoToTop className="fixed bottom-4 right-4" />
    </Section>
  );
}
export const dynamic = "force-dynamic";

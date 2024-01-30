//@ts-nocheck
import Surreal from "surrealdb.js";
import { ML_CATEGORIES, ML_CATEGORIES_MAP } from "../const/ml-categories";
import { memoized } from "@/utils/cache";
export type ScrappedItem = {
  name: string;
  image: string;
  seller?: string;
  price_history: Record<string, number>;
  id: string;
  link: string;
  category?: string;
  price_delta_vs_yesterday?: number;
  price_delta_vs_last_five_days?: number;
  subcategory?: string;
  currency_id?: string;
};

const db = new Surreal();
await db.connect("http://0.0.0.0:3002/rpc");

await db.signin({
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
});

await db.use({
  database: process.env.ML_OFERTAS_DATABASE,
  namespace: process.env.ML_OFERTAS_DATABASE,
});
await db.wait();
await db.ready;
const closeConnection = async () => {
  await db.close();
};
// 1 HOUR
const GENERAL_CACHE_DURATION = 1000 * 60 * 60;

const memoizedStore = memoized(GENERAL_CACHE_DURATION);
const PRODUCTS_IN_DISCOUNT = "PRODUCTS_IN_DISCOUNT";
const PRODUCTS_GROUPPED_BY_CATEGORY = "PRODUCTS_GROUPPED_BY_CATEGORY";
const METADATA_KEY = "METADATA_KEY";
const DISCOUNTS_COUNT_BY_CATEGORY = "DISCOUNTS_COUNT_BY_CATEGORY";

const getProductsByCategory = async (
  category = "MLA1652"
): Promise<ScrappedItem[]> => {
  const queryResult = await db.query(
    `SELECT * FROM products WHERE category = '${category}'`
  );
  return queryResult[0];
};

const getDiscountsByCategory = async () => {
  return memoizedStore(PRODUCTS_IN_DISCOUNT, async () => {
    const queryResult = await db.query(
      `SELECT * FROM products WHERE price_delta_vs_yesterday < 0 and price_delta_vs_yesterday != NONE`
    );
    const results = queryResult[0] as ScrappedItem[];
    let cacheProductsInDiscounts: Map<string, ScrappedItem[]> = new Map();
    // Init cache with categories keys
    ML_CATEGORIES.forEach((category) => {
      cacheProductsInDiscounts.set(category.id, []);
    });

    results.forEach((result) => {
      const category = result.category;
      if (!cacheProductsInDiscounts.has(category)) {
        cacheProductsInDiscounts.set(category, []);
      }
      cacheProductsInDiscounts.get(category).push(result);
    });
    return cacheProductsInDiscounts;
  }) as Promise<Map<string, ScrappedItem[]>>;
};

const getFirstTenProductGrouppedByCategory = async (
  category: keyof typeof ML_CATEGORIES_MAP
) => {
  return memoizedStore(PRODUCTS_GROUPPED_BY_CATEGORY + category, async () => {
    const queryResult = (
      await db.query(
        `SELECT * FROM products WHERE category = '${category}' ORDER BY price_delta_vs_yesterday ASC LIMIT 10;`
      )
    )[0] as ScrappedItem[];
    return queryResult as ScrappedItem[];
  }) as Promise<ScrappedItem[]>;
};

async function getMetadata(): Promise<{
  totalProducts: number;
  totalDiscounts: number;
  totalIncresed: number;
  totalCategories: number;
  responseTime: number;
}> {
  return memoizedStore(METADATA_KEY, async () => {
    const now = Date.now();
    const [totalProducts, totalDiscounts, totalIncresed, totalCategories] =
      await db.query(
        `count(select * from products); 
        count(select * from products where price_delta_vs_last_five_days<0 and price_delta_vs_last_five_days!=None); 
        count(select * from products where price_delta_vs_last_five_days>0 and price_delta_vs_last_five_days!=None);
        count(array::distinct(select category from products));
        `
      );

    const responseTime = Date.now() - now;
    console.log({
      totalProducts,
      totalDiscounts,
      totalCategories,
      totalIncresed,
      responseTime,
    });
    return {
      totalProducts,
      totalDiscounts,
      totalIncresed,
      totalCategories,
      responseTime,
    };
  });
}

async function getDiscountsCountByCategory() {
  return memoizedStore(DISCOUNTS_COUNT_BY_CATEGORY, async () => {
    const queryResult = await db.query(
      `select category, price_delta_vs_yesterday from products where price_delta_vs_yesterday<0 and price_delta_vs_yesterday!=None group by category, price_delta_vs_yesterday;`
    );
    const results = queryResult[0] as {
      category: string;
      price_delta_vs_yesterday: number;
    }[];
    return results;
  }) as Promise<
    {
      category: string;
      price_delta_vs_yesterday: number;
    }[]
  >;
}

async function findDiscountsByParentCategory(category: string) {
  console.log("findDiscountsByParentCategory", category);
  const queryResult = await db.query(
    `select * from products where price_delta_vs_yesterday<0 and price_delta_vs_yesterday!=None;`
  );
  const results = queryResult[0] as ScrappedItem[];

  return results.filter((result) => {
    const categoryFullName = ML_CATEGORIES_MAP[result.category];
    if (!categoryFullName) {
      return false;
    }
    const parentCategory = categoryFullName.split(" > ", 1)[0].trim();
    return parentCategory.toLowerCase() === category.toLowerCase();
  });
}

export {
  closeConnection,
  getProductsByCategory,
  getDiscountsByCategory,
  getFirstTenProductGrouppedByCategory,
  getMetadata,
  getDiscountsCountByCategory,
  findDiscountsByParentCategory,
};

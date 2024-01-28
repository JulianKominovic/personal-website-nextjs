//@ts-nocheck
import Surreal from "surrealdb.js";
import { ML_CATEGORIES } from "../const/ml-categories";
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
};

const db = new Surreal();
let isConnected = false;
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
let cacheProductsInDiscountsDate = new Date();
let cacheProductsInDiscounts: Map<string, ScrappedItem[]> = new Map();
// Init cache with categories keys
ML_CATEGORIES.forEach((category) => {
  cacheProductsInDiscounts.set(category.id, []);
});

// Valid for 1 hours
function cacheIsValid() {
  const now = new Date();
  return cacheProductsInDiscountsDate - now < 1000 * 60 * 60;
}

const getProductsByCategory = async (
  category = "MLA1652"
): Promise<ScrappedItem[]> => {
  const queryResult = await db.query(
    `SELECT * FROM products WHERE category = '${category}'`
  );
  return queryResult[0];
};

const getDiscountsByCategory = async () => {
  if (
    cacheIsValid() &&
    [...cacheProductsInDiscounts.values()].some((v) => v.length > 0)
  ) {
    console.log("CACHE HIT!");
    return cacheProductsInDiscounts;
  }

  cacheProductsInDiscountsDate = new Date();
  const queryResult = await db.query(
    `SELECT * FROM products WHERE price_delta_vs_yesterday < 0 and price_delta_vs_yesterday != NONE`
  );
  const results = queryResult[0] as ScrappedItem[];
  results.forEach((result) => {
    const category = result.category;
    if (!cacheProductsInDiscounts.has(category)) {
      cacheProductsInDiscounts.set(category, []);
    }
    cacheProductsInDiscounts.get(category).push(result);
  });

  return cacheProductsInDiscounts;
};
export { closeConnection, getProductsByCategory, getDiscountsByCategory };

//@ts-nocheck
import Surreal from "surrealdb.js";
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
const getInstance = async () => {
  if (isConnected) return db;
  await db.connect("http://0.0.0.0:3002/rpc", {
    database: process.env.ML_OFERTAS_DATABASE,
    namespace: process.env.ML_OFERTAS_DATABASE,
    auth: {
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.ML_OFERTAS_DATABASE,
      namespace: process.env.ML_OFERTAS_DATABASE,
      scopes: ["*"],
    },
  });
  await db.wait();
  isConnected = true;
  return db;
};

const closeConnection = async () => {
  await db.close();
};
const getProductsByCategory = async (
  category = "MLA1652"
): Promise<ScrappedItem[]> => {
  const queryResult = await (
    await getInstance()
  ).query(`SELECT * FROM products WHERE category = '${category}'`);
  return queryResult[0];
};
export { closeConnection, getProductsByCategory };

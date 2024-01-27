//@ts-nocheck
const Surreal = require("surrealdb.js");
type ScrappedItem = {
  name?: string;
  image?: string;
  seller?: string;
  price_history: Record<string, number>;

  link: string;
  category?: string;
  subcategory?: string;

  price_delta_vs_yesterday?: number;
  price_delta_vs_last_five_days?: number;
};

const db = new Surreal.Surreal();
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
// @ts-expect-error SurrealDB is not typed
const createOrUpdate = async (item: ScrappedItem) => {
  const database = await getInstance();
  const itemId = `products:⟨${item.link}⟩`;
  const existingItem: ScrappedItem = (
    await database.query(`SELECT * FROM products WHERE id = '${itemId}'`)
  )[0][0];
  if (existingItem) {
    const newPriceHistory: ScrappedItem["price_history"] = {
      ...existingItem["price_history"],
      ...item["price_history"],
    };
    const sortedPriceHistory = Object.entries(newPriceHistory).sort(
      (a, b) => new Date(b[0]).getTime() - new Date(a[0]).getTime()
    );
    const todayPrice = sortedPriceHistory.at(0)[1];
    const yesterdayPrice = sortedPriceHistory.at(1)[1];

    const last5Days = sortedPriceHistory.slice(1, 6);
    const last5DaysAverage =
      last5Days.reduce((acc, [date, price]) => acc + price, 0) /
      last5Days.length;
    const last5DaysAveragePriceDelta = todayPrice - last5DaysAverage;
    const yesterdayPriceDelta = todayPrice - yesterdayPrice;

    const merge: ScrappedItem = {
      ...item,
      price_history: newPriceHistory,
      price_delta_vs_yesterday: yesterdayPriceDelta,
      price_delta_vs_last_five_days: last5DaysAveragePriceDelta,
    };
    console.log(merge);

    await database.update(`${itemId}`, merge);
  } else {
    await database.create(`${itemId}`, item);
  }
};
const closeConnection = async () => {
  await db.close();
};
module.exports = { getInstance, createOrUpdate, closeConnection };

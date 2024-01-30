//@ts-nocheck
const Surreal = require("surrealdb.js");
/*
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
*/

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
  await db.signin({
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
  });
  await db.use({
    database: process.env.ML_OFERTAS_DATABASE,
    namespace: process.env.ML_OFERTAS_DATABASE,
  });
  await db.wait();
  isConnected = true;
  return db;
};

const getAllItems = async () => {
  const database = await getInstance();
  const existingItem = (await database.query(`SELECT * FROM products`))[0];
  return existingItem;
};

const deleteAllItems = async () => {
  const database = await getInstance();
  await database.query(`DELETE products`);
};

// @ts-expect-error SurrealDB is not typed
const bulkInsert = async (products) => {
  const instance = await getInstance();

  const itemsChunks = [];
  for (let i = 0; i < products.length; i += 5000) {
    itemsChunks.push(products.slice(i, i + 5000));
  }
  for (const chunk of itemsChunks) {
    console.log("INSERTING CHUNK OF", chunk.length);
    const result = await instance.query("INSERT INTO products ($products);", {
      products: chunk,
    });
    console.log("Inserted: ", result[0].length);
  }
};
const defineIndexes = async () => {
  const database = await getInstance();
  await database.query(
    "DEFINE INDEX priceDelta5days ON TABLE products COLUMNS price_delta_vs_last_five_days;"
  );
  await database.query(
    "DEFINE INDEX priceDeltaYesterday ON TABLE products COLUMNS price_delta_vs_yesterday;"
  );
  await database.query(
    "DEFINE INDEX priceDelta ON TABLE products COLUMNS price_delta;"
  );
};
const closeConnection = async () => {
  await db.close();
};
module.exports = {
  getInstance,
  closeConnection,
  bulkInsert,
  getAllItems,
  deleteAllItems,
  defineIndexes,
};

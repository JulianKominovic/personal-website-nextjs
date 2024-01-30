const path = require("path");
require("dotenv").config({
  path: path.resolve(__dirname, "../.env"),
});
const fs = require("fs");
const { closeConnection, bulkInsert, getAllItems } = require("./db-connection");
const dumpDir = "./dump/api";
const categoriesDir = fs.readdirSync(dumpDir);
const existingDbProducts = new Map();

async function createOrUpdate(item) {
  const existingItem = existingDbProducts.get(
    item.id.replace("⟨", "").replace("⟩", "")
  );
  if (!existingItem) return item;
  const newPriceHistory = {
    ...existingItem["price_history"],
    ...item["price_history"],
  };

  const sortedPriceHistory = Object.entries(newPriceHistory).sort(
    (a, b) => new Date(b[0]).getTime() - new Date(a[0]).getTime()
  );
  const todayPrice = sortedPriceHistory.at(0)?.[1] ?? 0;
  const yesterdayPrice = sortedPriceHistory.at(1)?.[1] ?? 0;

  const last5Days = sortedPriceHistory.slice(1, 6);
  const last5DaysAverage =
    last5Days.length > 0
      ? last5Days.reduce((acc, [date, price]) => acc + price, 0) /
        last5Days.length
      : 0;
  const last5DaysAveragePriceDelta =
    last5Days.length > 0 ? todayPrice - last5DaysAverage : 0;
  const yesterdayPriceDelta = yesterdayPrice ? todayPrice - yesterdayPrice : 0;

  const merge = {
    ...item,
    price_history: newPriceHistory,
    price_delta_vs_yesterday: yesterdayPriceDelta || 0,
    price_delta_vs_last_five_days: last5DaysAveragePriceDelta || 0,
  };
  console.log("MERGED", merge);
  return merge;
}

async function init() {
  const productsList = [];
  const existingItemsFromDatabase = await getAllItems();
  existingItemsFromDatabase.forEach((item) => {
    existingDbProducts.set(item.id, item);
  });
  console.log("GOT EXISTING ITEMS", existingItemsFromDatabase.length);
  console.log("SAVE MAP", existingDbProducts.keys().next().value);
  for (const category of categoriesDir) {
    if (category === "db-merge.json") continue;
    if (category === "categories.json") continue;

    const productDir = "./dump/api/" + category;
    const productsDirFiles = fs.readdirSync(productDir);
    const products = productsDirFiles.flatMap((file) => {
      return JSON.parse(fs.readFileSync(path.join(productDir, file))).results;
    });
    console.log("GOT PRODUCTS", products.length, "FROM", category);
    for (const product of products) {
      const {
        id,
        title,
        price,
        currency_id,
        thumbnail,
        condition,
        permalink,
        category_id,
        seller,
      } = product;
      const sellerNickname = seller?.nickname;
      const fullSizeThumbnail = thumbnail.replace("-I.jpg", "-F.jpg");
      const mergedProduct = await createOrUpdate({
        id: `products:⟨${id}⟩`,
        name: title,
        image: fullSizeThumbnail,
        seller: sellerNickname,
        price_history: {
          [new Date().toISOString().split("T")[0]]: price,
        },

        link: permalink,
        category: category_id,
        subcategory: category_id,
        price_delta: 0,
        currency_id,
      });
      productsList.push(mergedProduct);
    }
  }
  fs.writeFileSync(
    "./dump/db-merge.json",
    JSON.stringify(productsList, null, 2)
  );
  await closeConnection();
}

init();

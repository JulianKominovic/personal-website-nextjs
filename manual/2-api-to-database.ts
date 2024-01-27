const path = require("path");
require("dotenv").config({
  path: path.resolve(__dirname, "../.env"),
});
const fs = require("fs");
const { globSync } = require("glob");
const { createOrUpdate, closeConnection } = require("./db-connection");

console.log(process.env);
const productDir = "./dump/api/MLA1652";
const productsDirFiles = fs.readdirSync(productDir);
const products = productsDirFiles.flatMap((file: any) => {
  return JSON.parse(fs.readFileSync(path.join(productDir, file))).results;
});

async function run() {
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
    await createOrUpdate({
      name: title,
      image: fullSizeThumbnail,
      seller: sellerNickname,
      price_history: {
        [new Date().toISOString().split("T")[0]]:
          Math.random() > 0.5 ? price : Math.floor(Math.random() * 1_000_000),
      },

      link: permalink,
      category: category_id,
      subcategory: category_id,
      price_delta: 0,
    });
    console.log({
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
    });
  }
  closeConnection();
}

run();

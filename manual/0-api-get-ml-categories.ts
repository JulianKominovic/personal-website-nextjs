const path = require("path");
const fs = require("fs");
require("dotenv").config({
  path: path.resolve(__dirname, "./.env"),
});
const CATEGORIES_FLAT = {};

async function init() {
  const url = `https://api.mercadolibre.com/sites/MLA/categories`;
  const categories = await fetch(url, {
    headers: {
      Authorization: "Bearer " + process.env.MERCADO_LIBRE_API_KEY,
    },
  })
    .then((res) => res.json())
    .catch((err) => {
      console.log(err);
    });

  console.log(categories);

  for (const category of categories) {
    CATEGORIES_FLAT[category.id] = category.name;

    const url = `https://api.mercadolibre.com/categories/${category.id}`;
    const subcategories = await fetch(url, {
      headers: {
        Authorization: "Bearer " + process.env.MERCADO_LIBRE_API_KEY,
      },
    })
      .then((res) => res.json())
      .catch((err) => {
        console.log(err);
      });
    for (const subcategory of subcategories.children_categories) {
      console.log(subcategory);
      CATEGORIES_FLAT[subcategory.id] = subcategory.name;
    }
  }
  console.log(CATEGORIES_FLAT);
  fs.writeFileSync(
    `./dump/api/categories.json`,
    JSON.stringify(CATEGORIES_FLAT, null, 2)
  );
}
init();

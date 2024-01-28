const path = require("path");
const fs = require("fs");
const { ML_CATEGORIES: ML_CATEGORIES_ARRAY } = require("./ml-categories");
require("dotenv").config({
  path: path.resolve(__dirname, "./.env"),
});

async function getProducts(page = 0, category = "MLA1652") {
  // Using mercado libre api get products in category MLA1652 -> Notebooks
  const url = `https://api.mercadolibre.com/sites/MLA/search?category=${category}&limit=50&offset=${
    page * 50
  }`;

  fetch(url, {
    headers: {
      Authorization: "Bearer " + process.env.MERCADO_LIBRE_API_KEY,
    },
  })
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
      fs.mkdirSync("./dump/api/" + category, { recursive: true });
      fs.writeFileSync(
        `./dump/api/${category}/${page}.json`,
        JSON.stringify(res, null, 2)
      );
    })
    .catch((err) => {
      console.log(err);
    });
}

async function init() {
  for (const category of ML_CATEGORIES_ARRAY) {
    for (let i = 0; i < 4; i++) {
      await getProducts(i, category.id);
    }
  }
}

init();

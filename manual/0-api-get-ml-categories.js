const path = require("path");
const fs = require("fs");
require("dotenv").config({
  path: path.resolve(__dirname, "./.env"),
});
const CATEGORIES_FLAT = {};
const mla = require("./mla");

const ROOT_CATEGORIES = {};

async function init() {
  Object.entries(mla).forEach(([key, data]) => {
    const { path_from_root, total_items_in_this_category } = data;
    // Leave only relevant categories
    if (total_items_in_this_category < 100) {
      return;
    }
    // Only 2 levels of depth
    if (path_from_root.length <= 2) {
      CATEGORIES_FLAT[key] = path_from_root.map((r) => r.name).join(" > ");
    }
  });
  console.log(ROOT_CATEGORIES);
  console.log(CATEGORIES_FLAT);
  fs.writeFileSync(
    `./dump/api/categories.json`,
    JSON.stringify(CATEGORIES_FLAT, null, 2)
  );
}
init();

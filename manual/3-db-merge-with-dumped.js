const path = require("path");
require("dotenv").config({
  path: path.resolve(__dirname, "../.env"),
});
const fs = require("fs");
const {
  closeConnection,
  bulkInsert,
  deleteAllItems,
} = require("./db-connection");
const dumpFile = require("../dump/db-merge.json");

async function init() {
  await deleteAllItems();
  await bulkInsert(dumpFile);
  await closeConnection();
}

init();

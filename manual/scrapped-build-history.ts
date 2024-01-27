const fs = require("fs");
const { globSync } = require("glob");
const todayDate = new Date().toISOString().slice(0, 10);

function findFoldersByDate() {
  return fs.readdirSync("./dump");
}

function loadDedupedFiles(foldersByDate: string[]) {
  return foldersByDate.flatMap((folder) => {
    return JSON.parse(
      fs.readFileSync(`./dump/${folder}/deduped.json`, {
        encoding: "utf8",
      })
    );
  });
}

const folders = findFoldersByDate();
const items = loadDedupedFiles(folders);

const groupped: any = {};

items.forEach((item: any) => {
  const { link, price_history } = item;
  if (groupped[link]) {
    groupped[link].price_history.push(...price_history);
  } else {
    groupped[link] = item;
  }
});

console.log(
  Object.values(groupped).map(({ price_history }: any) => price_history)
);

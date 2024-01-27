const fs = require("fs");
const { globSync } = require("glob");
const todayDate = new Date().toISOString().slice(0, 10);

function loadFiles() {
  return globSync(`./dump/${todayDate}/**/*.json`).flatMap((file: string) => {
    return JSON.parse(fs.readFileSync(file, "utf8"));
  });
}

const files = loadFiles();

const dedupedFiles = files.filter((file: any, index: number, self: any[]) => {
  return index === self.findIndex((t: any) => t.link === file.link);
});

console.log(dedupedFiles);

fs.writeFileSync(
  `./dump/${todayDate}/deduped.json`,
  JSON.stringify(dedupedFiles, null, 2)
);

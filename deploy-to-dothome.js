const fs = require("fs");
const { execSync } = require("child_process");

const dothomeURL = "http://nevermind.dothome.co.kr";

const packageJSON = JSON.parse(fs.readFileSync("package.json"));
const prevHompageURL = packageJSON.homepage;
packageJSON.homepage = dothomeURL;
console.log();

fs.writeFileSync("package.json", JSON.stringify(packageJSON, null, 2));
console.log("Modify homepage:");
console.log(`Previous URL: \"${prevHompageURL}\"`);
console.log(`Modified URL: \"${dothomeURL}\"`);
console.log();

console.log(`Building React app for \"${dothomeURL}\"...`);
execSync("yarn build");
console.log("React app built in successfully");
console.log();

packageJSON.homepage = prevHompageURL;
fs.writeFileSync("package.json", JSON.stringify(packageJSON, null, 2));
console.log("Restore homepage:");
console.log(`Previous URL: \"${dothomeURL}\"`);
console.log(`Restored URL: \"${prevHompageURL}\"`);
console.log();

console.log(
  `DONE. Upload ./build/* files to ftp://${dothomeURL.replace("http://", "")}/html/`
);

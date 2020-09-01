// https://www.npmjs.com/package/react-app-rewired

const path = require("path");

module.exports = function override(config, env) {
  config.resolve.alias = {
    ...config.resolve.alias,
    Src: path.resolve(__dirname, "src/"),
    Components: path.resolve(__dirname, "src/Components/"),
    Routes: path.resolve(__dirname, "src/Routes/"),
    assets: path.resolve(__dirname, "src/assets/"),
  };
  return config;
};

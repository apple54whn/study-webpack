// 这个会从 node 中查找，需要 npm init 来生成 package.json
const path = require("path");

module.exports = {
  entry: "./src/main.js",
  output: {
    // path 需要写绝对路径，但又不能直接指定，可以动态获取（采用 node 语法）
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
};

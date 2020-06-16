// 生产时依赖
const uglifyjsWebpackPlugin = require("uglifyjs-webpack-plugin");
const baseConfig = require("./base.config");
const webpackMerge = require("webpack-merge");

module.exports = webpackMerge(baseConfig, {
  plugins: [
    // uglifyjsWebpackPlugin 插件
    new uglifyjsWebpackPlugin(),
  ],
});

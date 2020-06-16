// 开发时配置
const baseConfig = require("./base.config");
const webpackMerge = require("webpack-merge");

module.exports = webpackMerge(baseConfig, {
  devServer: {
    // 为那个目录提供本地服务，默认是项目根目录
    contentBase: "./dist",
    // 页面实时刷新
    inline: true,
    // 端口
    port: 9999,
    // 在SPA中，依赖H5的history模式
    // historyApiFallback,
  },
});

// 这个会从 node 中查找，需要 npm init 来生成 package.json
const path = require("path");

module.exports = {
  entry: "./src/main.js",
  output: {
    // path 需要写绝对路径，但又不能直接指定，可以动态获取（采用 node 语法）
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    // 输出涉及url时，会自动在前面添加该字符串。实际中，会把所有文件都打包到 dist 中，此时应该删掉publicPath配置
    publicPath: "dist/",
  },
  module: {
    rules: [
      {
        // 匹配.css文件
        test: /\.css$/i,

        // style-loader 将模块导出作为style添加到DOM中
        // css-loader解析css文件后，使用import加载，并返回css代码
        // 使用多个loader时，从右到左加载。顺序不能乱！
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: "style-loader", // creates style nodes from JS strings
          },
          {
            loader: "css-loader", // translates CSS into CommonJS
          },
          {
            loader: "less-loader", // compiles Less to CSS
          },
        ],
      },
      {
        test: /\.(png|jpg|gif|jpeg)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              // 当图片大小小于 limit 时，会被编译为base64字符串
              // 当大于 limit 时，会使用 file-loader 进行加载，仅需要安装！
              limit: 10000,
              // img/目录下，[name]为原名，[hash:8]为8位哈希值，.[ext]为后缀
              name: "img/[name][hash:8].[ext]",
            },
          },
        ],
      },
      {
        test: /\.js$/,
        // 排除
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["es2015"],
          },
        },
      },
    ],
  },
};

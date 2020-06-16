// CommonJS
var { formatDate } = require("./js/utils.js");

console.log(formatDate(new Date()));

// ES6
import * as poem from "./js/poem.js";
console.log(poem.SPRING);

// CommonJS 语法，不能使用 ES6，那是针对 JS 的
require("./css/normal.css");
require("./css/special.less");
// document.writeln("World");

import Vue from "vue";
// 导入组件 js 文件，可省略后缀
// import App from "./vue/app";
// 导入组件 vue 文件，不可省略后缀。在 vue 文件中可以省略（但需webpack配置）
import App from "./vue/App.vue";

const vm = new Vue({
  el: "#app",
  template: "<App/>",
  components: {
    App,
  },
});

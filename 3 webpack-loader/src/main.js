// CommonJS
var { formatDate } = require("./js/utils.js");

console.log(formatDate(new Date()));

// ES6
import * as poem from "./js/poem.js";
console.log(poem.SPRING);

// CommonJS 语法，不能使用 ES6，那是针对 JS 的
require("./css/normal.css");
require("./css/special.less");
document.writeln("World");

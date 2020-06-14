// CommonJS
var { formatDate } = require("./js/utils.js");

console.log(formatDate(new Date()));

// ES6
import * as poem from "./js/poem.js";
console.log(poem.SPRING);

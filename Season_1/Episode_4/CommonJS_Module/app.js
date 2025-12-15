// THis can run the xyz.js file aswell
//1 module into another
require("./xyz"); //this file code will run first

const { x, calculateSum } = require("./sum");

var name = "Rahul Verma";
var a = 10;

var b = 20;
//Can I use the function in sum.js file here ?
//Even if we write require("./sum") , we cannot use the variables and methods inside the modules
calculateSum(a, b);
console.log(x);
console.log(globalThis == global);

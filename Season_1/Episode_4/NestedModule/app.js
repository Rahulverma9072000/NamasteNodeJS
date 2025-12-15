//Here you just have to import from 1 folder all the function 
//app.js will not even care where calculateSum file is present 
//THis is very important Pattern 
const {calculateSum , calculateMultiply , calculateSubtraction } = require("./calculate");

var a = 10;
var b = 20;

calculateMultiply(a,b);
calculateSubtraction(a,b);
calculateSum(a,b);
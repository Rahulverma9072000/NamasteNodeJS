// I want to make this calculate folder as a Module

const calculateMultiply = require("./multiply");
const calculateSum = require("./sum");
const calculateSubtraction = require("./subtract");

//All these files got merged into 1 index.js file 
module.exports = { calculateMultiply, calculateSubtraction, calculateSum };

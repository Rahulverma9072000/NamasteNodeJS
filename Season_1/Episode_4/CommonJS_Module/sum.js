//Modules by default protects thier variables and functions from leaking
// But if intentionally we want to do it than we have to do export and import

var x = "Hello World";
function calculateSum(a, b) {
    const sum = a + b;
    console.log("Code Running from Sum.js", sum);
}

//See here it will not give error because it runs in non strict mode 
z = "Hello World" 

console.log("Module.exports" , module.exports);  //THis is an empty object 
//Since it is an object we can also do 
module.exports.x = x;
module.exports.calculateSum = calculateSum;
// module.exports = {
//     x,
//     calculateSum,
// };

console.log("Sum Module Executed");

var x = "Rahul";

//THis will give Error because ES Module Run in Strict Mode By default 
// z = "Hi Tom" 

function calculateSum(a,b){
    const sum = a + b;
    console.log(sum);
}

module.exports = calculateSum;
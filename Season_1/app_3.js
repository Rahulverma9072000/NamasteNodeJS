// JavaScript is a synchronous single threaded language line by line code will be executed and it run by the NodeJS using V8 Engine .

var name = "Namaste NodeJS";

var a = 10;
var b = 20;
console.log(name);
console.log(a + b);
console.log(global);

console.log(this);

console.log(globalThis);

//So Global Objects in the Browsers : window , this , self , frames : different keywords refer to same global object 
// In NodeJS we have global object as global 

//To make same keyword in all the JS Runtime we have globalThis 

console.log(globalThis == global);

console.log("Entrypoint File");

// Different Way of Accessing Imported code;(destructuring, by adding in Variables)
// Two Way Of Importing in (Common Js Module) and (ES-Module)

// ES-module
// import {x, calculateSum} from "./random.js";

// Common-JS-module
// const obj = require("./random.js");
// const {x, calculateSum} = require("./random.js");


// Non-srict node (commonjs)
// z = "Hello World"

// Strict Mode(type - module) in ES-module 
// We Have To declare Variable before initialization
// var z = "Hello World";


const a = 10;

const b = 20;

// console.log(x);

// calculateSum(a , b);

const { calculateSum, calculateMultiply} = require("./calculate/index.js");
calculateMultiply(2, 5);
calculateSum(5, 5);
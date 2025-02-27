// Write a node js program to describe the case 'path' module 
const path =require("path")
const f ="./abc.txt";
console.log(path.dirname(f));
console.log(path.basename(f));
console.log(path.extname(f));
console.log(path.join("./abc.txt"));
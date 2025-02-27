// Write a node js program to describe the core 'fs' module 
console.log("Brainware University");
const fs=require('fs');
fs.readFile("./abc.txt","utf-8",function(e,d){
    if(e){
        console.error("file not found.....")
    }else{
        console.log(`Data:\n${d}`);
    }
});
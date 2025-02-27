// Write a node js program to describe local module with two function.

const add=(a,b)=>{
    console.log(a+b);
}
const sub=(a,b)=>{
    console.log(a-b);
}
const mul=(a,b)=>{
    console.log(a*b);
}
const div=(a,b)=>{
    if(b==0){
        console.log("Error : Division by zero is not allowed");
    }else{
        console.log(a/b);
    }
}
module.exports={add,sub,mul,div}
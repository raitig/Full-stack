//Write a node js function to calculate the execution of multiple function .
const executionTime=(f,a,b)=>{
    console.time("time");
    f(a,b);
    console.timeEnd("time");
}
const a=(a,b)=>console.log(a+b);
const b=(a,b)=>console.log(a-b);
const c=(a,b)=>console.log(a*b);
const d=(a,b)=>console.log(a/b);
executionTime(a,5,9);
executionTime(b,5,9);
executionTime(c,5,9);
executionTime(d,5,9);
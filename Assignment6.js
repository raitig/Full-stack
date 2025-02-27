    //Write a node js program to explain asynchronus and synchronus function with example
    console.log("Hello world");
    const fs=require("fs");
    fs.readFile("./abc.txt","utf-8",(e,d)=>{
        if(e){
            console.error("file not present.....")
        }else{
            console.log("async:",d);
        }   
    });
    console.log("Bye world");
    console.log("Hello world");
    const a=fs.readFileSync("./abc.txt","utf-8");
    console.log(a);
    console.log("Bye world");
                                     
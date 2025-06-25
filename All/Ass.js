// Assignment 1
// i) Create a nodejs script to demonstrate variables
/*

ii) Functions :
- Fibonachi
- Factorial
- Palindrome
- Armstrong
- Reverce

iii) Create a nodeJS script demonstrating conditional loops (find word from a statament)
iv) Create a NodeJS script to create object using function and create an array and apply it's unbuilt methods.
v) Create a async codeby using setTimeout() method.
*/

//  i) Create a nodejs script to demonstrate variables
{
    let x = 7;
    const y = 87;
    var c = x + y;
}
console.log("Var out scope :" + c)


// fibonachi
function fibo(n) {
    let series = []
    for (let prev = 0, next = 1, i = 0; i <= n; i++,
        [prev, next] = [next, prev + next]) {
        series = series.concat(prev)
    }
    return series;
};
console.log("Fibonachi up to 5 : " + fibo(5));


// Factorial
function factorial(n) { return n <= 1 ? 1 : n * factorial(n - 1); }
console.log("Factorial of 5 : ", factorial(5))


// armstrong  use - arrow func
const armstrong = (n) => {
    const st = `${n}`;
    let x = 0;
    for (let i = 0; i < st.length; i++) {
        let c = parseInt(st[i]);
        x += Math.pow(c, st.length);
    }
    console.log(`${n} ${x == n ? 'is' : "isn't"} armstrong.`)
}
armstrong(153);

// reverce
const reverse = (n) => {
    return n ? `${n}`.split().reverse().join("") : null;
}
console.log("hell Reversed : " + reverse("hel"));

// palindrome 
const palindrome = (n) => {
    console.log(`${n}` === reverse(n) ?
        `${n} is palindrome` :
        `${n} isn't palindrome!!`);
}
palindrome("151");


// Create a nodeJS script demonstrating conditional loops (find word from a statament)
let str = "I tried, but unable to forget!!".split(" ");
let i=0, target = "unable";
// using for loop
for (i=0; i < str.length; i++) {
    if (str[i] == target) {
        console.log("(For) " + target + " found at index : " + i);
    }
}

//  using while loop
i = 0;
target="but";
while (i < str.length) {
    if (str[i] == target) {
        console.log("(While) " + target + " found at index : " + i);
    }
    i++;
}

// using do while
i=0;
do {
    if (str[i] == target) {
        console.log("(Do While) " + target + " found at index : " + i);
    }
    i++;
} while (i < str.length);



// iv) Create a NodeJS script to create object using function then create an array and apply it's unbuilt methods.
function getProfile(username="", email="", pass=""){
    let data =  {
        "username": username,
        "email": email,
        "pass": pass
    }
    return data;
}
console.log(new getProfile("im_hunter87", "hunter87@blastixesports.in", "prettyEasy"))


let arr = [887,654,509 ];
console.log("Original array : ", arr);
console.log("Concated : "+arr.concat([678]));

arr.push(798)
console.log("Pushed : "+arr);

arr.pop(0)
console.log("Popped : "+arr);

console.log("Mapp : ")
arr.map(e=>(
    console.log(e)
))

console.log("Shift : " + arr.shift())
arr.unshift(576)
console.log("Unshifted : " , arr)
console.log("Filter Greater than 600 : ", arr.filter(e=>e>600))
console.log("Reduce :", arr.reduce((t,e)=>t-e))
console.log("For each : ")
arr.forEach(e=>console.log(e));
console.log("509: " , arr.find(e=>e==509)?"Found":"Not Found")
console.log("Index of 509:", arr.findIndex(e=>e==509))
console.log("Sorted: " , arr.sort())
console.log("Reverse: " , arr.reverse())
console.log("Arr Filled : ", arr.fill(509))
console.log("Arr includes 509: ", arr.includes(509))

arr.push([86,87])
console.log("Arr before flat : ", arr)
console.log("Arr after flat:", arr.flat(1))
arr.pop()
console.log("Spliced:" , arr.splice(0,1))

console.log("After Join:", arr.join('_'))
console.log("All values are > 500: ", arr.every(e=>e>500))
console.log("vals == 500:", arr.some(e=>e==500))


// 6. Create a NodeJS script to create object using function and create an array and apply it's unbuilt methods.



//  Assignment 2 : 
// Write a node js program to take user input,addtwo numbers & display the result :
const r = require('readline');
const i = r.createInterface({
   input:process.stdin,
   output:process.stdout
});
i.question("Enter the first number :",(a)=>{
    i.question("Enter the second number :",(b)=>{
        console.log(parseInt(a)+parseInt(b));
        i.close();
    });
});

// Create a node js script to display system environment variables :
const p=require('process');
console.log(p.env);



// Assignment 4 :
//  write a nodejs script for the REPL environment, including functions, array methods, and async operations.

function callMe(){
    console.log("87 is Enough");
}
const arr = [8,7,6,5]
arr.push(9)
console.log(arr);

console.log("before timeout");
setTimeout(()=>{console.log("Timeout")}, 3000);
console.log("After Time out");
callMe();



// $node
// > .load ./assignment4.js



// Assignment 5 : 
// write a nodejs function to calculate execution of multiple functions


async function executed(callback=()=>{}){
    console.time(callback.name);
    await callback();
    console.timeEnd(callback.name);
}
async function HttpFunction(){
    await fetch("https://google.com"); 
} 
function simpleFunc(){
    console.log("HAHAHAHAHAHA....");
}

executed(simpleFunc)
executed(HttpFunction)




// Assignment 6 :
//  write a nodejs program to demonstrate asynchronous and synchronous  functions with example


async function asyncFunc(){
    const response = await fetch("https://google.com"); 
    console.log("async func done!!");                      
} 

function simpleFunc(){
    console.log("sync func done!!");
}

console.log("Executing Async Code!!");
asyncFunc();
console.log("Executing Sync Code!!");
simpleFunc();



// Assignment 7:
//  write a nodejs program to describe the nodejs core module -> 'path', 'fs'


// path module
import * as path from "node:path"
const rPath="assignments/assignment7.js"
console.log("Ext:", path.extname(rPath))
console.log("Dir: ", path.dirname(rPath))
console.log("Joined: ", path.join("node", rPath))
console.log("BaseName: ", path.basename(rPath))


// fs module
import fs from "node:fs"
const fp = "./test.txt"
const data = fs.readFileSync(fp, "utf-8")
console.log("Sync Read:", data.split("\n")[0])

fs.readFile(fp, (err, file)=>{
    console.log("Async Read:", file.toString("utf-8").split("\n")[0])
})
fs.writeFile(fp, data, "utf-8", ()=>{
    console.log("Async Write")   
})

fs.writeFileSync(fp, "Hunter87")

fs.appendFile(fp, "\n//injected comment",()=>{
    console.log("Async Append ")
})
fs.chmod(fp, 0o775, (err) => {
    if (err) throw err;
    console.log('The permissions for file "my_file.txt" have been changed!');
})
fs.linkSync(fp, "./hell.txt")



//  Assignmnet 8 :
//  write a nodejs program to demonstrate the use of Buffer including
// - creating buffer from .from() & .alloc()
// - writing data using  .write()
// - slicing the buffer using .slice()


const b1=Buffer.alloc(11);
Buffer.from("Hello");
console.log(b1);
b1.write("Hello world");
console.log(b1.toString("utf-8"));
const b2=b1.slice(0,5);
console.log(b2.toString("utf-8"));




//Assignment 9: 
// Write a node js program to describe local module with two function.
// Module export.......
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

// Module import 
const b=require("./moduleexport");
console.log(b.add(5,5));
console.log(b.sub(5,5));
console.log(b.mul(5,5));
console.log(b.div(5,5));


//// Write a node js program to describe local module with an object.
// OBJ Export.
const obj={
    name:"Raitig",
    age:20
}
module.exports={obj};

//OBJ import 

const b=require("./objexport");
console.log(b.obj);



//Assignment 11:
//a) Write a Node.js program to create a server using HTTP core module
//b) Extend the server to handle routes and process different HTTP module (GET,POST,PUT,DELETE)
const http = require("http")
const port = 3000;
const host = 'localhost';

const routes = {
    "GET" : {
        "/" : (req,res)=> res.end("Hello from index!! get method")
    },
    "POST" : {
        "/login" : (req, res)=> res.end("Hello from login!! post method")
    },
    "PUT" : {
        "/update" : (req,res)=> res.end("Updating data!! put method")
    },
    "DELETE" : {
        "/del_user" : (req,res)=> res.end("deleting data!! delete method")
    }
}
function manageRoutes(req,res){
    try{
        routes[req.method][req.url](req, res);
    }
    catch(err){
        res.end("404 | Page Not Found!!")
    }
}

const server = http.createServer((req,res)=>{
    manageRoutes(req,res);
})

server.listen(3000, ()=>console.log(`Server running on: http://${host}:${port}`))




// Assignment: 12
// write a nodejs program to perform CRUd operations(Create, Read, Update, Delet)
const fs = require("fs");
const readline = require('node:readline');


const opts = 'c- Create\nr- Read\nu- Update\nd- Delete\n';
const dataFilePath = "./assets/as12.txt";
var globalData = fs.readFileSync(dataFilePath, "utf-8")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function command(question, callback) {
    rl.question(question, callback)
}

function create(username){
    globalData+=`${username}\n`;
    fs.writeFileSync(dataFilePath, globalData)
    handleChoise()
}

function read(username){
    if(globalData.includes(username)){
        console.log(username);
    }
    else console.log(globalData)
    handleChoise()
}

function update(usernames){
    if(!globalData.includes(usernames[0])){
        console.log("User not found to delete!!")
        handleChoise()
        return;
    }
    globalData = globalData.replace(usernames[0], usernames[1])
    fs.writeFileSync(dataFilePath, globalData);
    console.log("User Updated!!");
    handleChoise()
}

function del(username){
    if(!globalData.includes(username)){
        console.log("User not Found")
    }
    else{
        globalData=globalData.replace(username, "");
        fs.writeFileSync(dataFilePath, globalData);
    }
    handleChoise()
}

function handleChoise() {
    command(opts, (answer) => {
        switch (answer) {
            case 'c':
                command("Enter username: ", (a) => create(a))
                break;
            case 'r':
                command("Enter username: ", a => read(a))
                break;
            case 'u':
                command("Enter username and newname: ", a => update(String(a).split(" ")))
                break;
            case 'd':
                command("Enter username: ", a=>del(a))
                break;
        }
    });
}

handleChoise()



//assignment 15: 
//
const e = require("express")
const {join} = require("path")

const app = e()
app.use(e.json())

function cookieParser(req,res,next){
    const cookieHeader = String(req.headers.cookie);
    if (!cookieHeader)  next();
    const cookieURL = new URLSearchParams(cookieHeader.replaceAll(";", "&"))
    const cookieObj = {};
    cookieURL.forEach((v,k)=>{
        k && v ? cookieObj[String(k.trim())] = String(v) : null
    })
    req.cookies = cookieObj;
    next()
}

app.use(cookieParser)
function authorised(req,res,next){
    const auth = req.query.key || req.headers.authorization;
    auth ? auth=="token.abc" && next() : res.status(401).json({message : "Unauthorised!!"}) 
}

app.get("/", (req,res)=>{
    console.log(req.cookies)
    res.sendFile(join(__dirname, "./static/index.html"))
})
app.get("/calc", authorised, (req,res)=>res.sendFile(join(__dirname, "./static/calc.html")))
app.get("/calc-res", authorised, (req,res)=>{res.send(Number(req.query.num1) + Number(req.query.num2))})
app.listen(3001, ()=>console.log("listening to port 3001"))
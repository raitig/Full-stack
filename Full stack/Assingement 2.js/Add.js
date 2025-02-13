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
0
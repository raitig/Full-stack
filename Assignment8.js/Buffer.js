// Write a node js program demonstrating the use of buffers including :
// Creating buffer with Buffer.from() & Buffer.alloc()
// 1. Writhing data using write().
// 2. Slicing buffers using Slice().

const b1=Buffer.alloc(11);
Buffer.from("Hello");
console.log(b1);
b1.write("Hello world");
console.log(b1.toString("utf-8"));
const b2=b1.slice(0,5);
console.log(b2.toString("utf-8"));


// Js is a single threaded. so event loop executes non blocking execution

console.log("Start");
setTimeout(()=>{
    console.log("Timer");
}, 2000);
console.log("End");
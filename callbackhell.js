// Nestd callbacks (A chain of callbacks) , making hard to read the code

// Example using setTimeout

setTimeout(() => {
  console.log("First Call ");
  setTimeout(() => {
    console.log("Second Call ");
      setTimeout(() => {
    console.log("Third Call ");
  },2000);
  },2000);
},2000);

// Our own function

function task(name, delay, callback){
    console.log(`${name } Started`);
    setTimeout(()=>{
        console.log(`${name} completed `);
        callback()

    }, delay)
}

task("Task 1", 1000, ()=>{
    task("Task 2", 1000,()=>{
        task("Task 3", 1000, ()=>{
            console.log("Ended")
        })
    })
})

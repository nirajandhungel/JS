// Solving callback hell using async / await
let task = (tName, delay)=>{
    return new Promise ((resolve, reject)=>{
        setTimeout(()=>{
            console.log(`${tName} Completed. `);
            resolve();
        }, delay)
    })
}
let runTasks = async function(){
    try{
        await task("Task 1", 1000);
        await task("Task 2", 2000);
        await task("Task 3", 3000);

    }catch(err){
        console.log(err)
    }

}
runTasks()
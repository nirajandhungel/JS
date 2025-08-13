let fetchData = (success)=>{
    return new Promise ((resolve, reject)=>{
        setTimeout(()=>{
            if(success){
                resolve("Data Fetched Successfully ")
            }
            else{
                reject("Error occured")
            }

        }, 2000)

    })
}

async function getData(){
    try{
        const result = await fetchData(false)
        console.log(result)

    }catch(err){
        console.log(err)
    }

}
getData()
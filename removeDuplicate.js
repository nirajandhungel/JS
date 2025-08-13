// 1. Remove duplicates from an array Example: [1, 2, 2, 3, 4, 4, 5] → [1, 2, 3, 4, 5]
function usingSet(arr){
    return [... new Set(arr)]  // converting to set , then again to array

}
function usingFilter(arr){
    return arr.filter((elem,index)=>arr.indexOf(elem) === index);  // using filter return if index of element in array is same i.e. there is no 2 elems in different indes

}
function usingReduce(arr){

    return arr.reduce((acc,curr)=>{  //pushing each elem to accumulator if the acc doesnt contain elem, returning acc, passing [] as reference
        if(!acc.includes(curr)){
            acc.push(curr)
        }
        return acc
    },[])
}
console.log(usingSet([1, 2, 2, 3, 4, 4, 5]))
console.log(usingFilter([1, 2, 2, 3, 4, 4, 5]))
console.log(usingReduce([1, 2, 2, 3, 4, 4, 5]))
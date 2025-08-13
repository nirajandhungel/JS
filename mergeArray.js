let sorted1 = [2,3,4];
let sorted2= [3,4, 5,6,7];

function mergeArray (arr1, arr2){

    arr= [...arr1 , ...arr2] /// spread operator to merge 2 arrays
    uniqueArr = new Set (arr); // converting to set for uniqueness
    return [... uniqueArr]; //converting back to array
}
console.log(mergeArray(sorted1,sorted2))
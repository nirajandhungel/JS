let arr= [1,2,3,4,5,7,8,9];
function findMissing(arr){


for(let i =0; i<arr.length;i ++){
    if(arr[i]+1 != arr[i+1]){
        return arr[i] + 1;
    }
}
}
console.log(findMissing(arr));
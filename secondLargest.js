let arr = [2,1,3,4];
for(let i = 0;i<arr.length;i++){
    for(let j=i;j<arr.length;j++){
        if(arr[i]<arr[j]){
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }

}
console.log(arr);
console.log(arr[1]);


//second method 

let ar = [4,1,3,2];
let max = -Infinity;
let secondMax = -Infinity;
for (let item of ar){
    if(item>max){
        secondMax = max;
        max = item;
    }
    else if (item>secondMax && item <max){
        secondMax = item;
    }

}
console.log(secondMax);
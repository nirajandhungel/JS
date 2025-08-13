let str1 = "Nirajan";
let reversedString="";
for(let i =str1.length-1; i>=0;i--){
    reversedString = reversedString + str1[i];
}
console.log(reversedString);


console.log(str1.split("").reverse().join(""));
let num = 5563;
let reversedNum=0, temp =num ;
while (temp){
    reversedNum = reversedNum *10 + temp%10;
    temp = Math.floor(temp/10);
}
let stat = (reversedNum == num)?`Yes, ${num} is a palindrome. `:`No, ${num} is not a palindrome.`
console.log(stat);
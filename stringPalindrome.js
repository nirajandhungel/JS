function isStringPalindrome(str){
    let reversedString = str.split("").reverse().join("");
    if (reversedString == str){
        return true;

    }
    return false ;

}
console.log(isStringPalindrome("nip"))
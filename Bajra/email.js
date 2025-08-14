function validateEmail(email){
    let index =  email.indexOf('@');
    if(!index) return false;
    // return index;
    if(!email.endsWith(".com")) return false;
    let localPart = email.slice(0,index);
    let count=0; //count of letters before @
    let haveNumber = false;

    for(let char of localPart){
        if((char>='a' && char<='z') || (char >='A' && char<='Z')){
            count++;
        }

        if(char>=0 && char<=9){
            haveNumber = true;
        }
    }
    if(count<6) return false;
    if(!haveNumber) return false;

    return true;
}
console.log(validateEmail("sub32@gmail.com"))
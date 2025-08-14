function validateEmail(email){
    let index =  email.indexOf('@');
    if(!index) return false;
    // return index;
    if(!email.endsWith(".com")) return false;
    let count; //count of letters before @

    for(let char of email){
        if(char>='a' && char<='z' || char >='A' && char<='Z'){
            count++;
        }
    }
}
console.log(validateEmail("subash@gmail.com"))
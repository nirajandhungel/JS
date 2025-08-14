function validateEmail(email){
    let index =  email.indexOf('@');
    if(!index) return false;
    return index;
}
console.log(validateEmail("subash@gmail.com"))
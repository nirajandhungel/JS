// function that remembers variable from outer function

function outerFunction(){
    let count =0;
    return function innerFunction(){
         return (count ++);


    }
}
const counter = outerFunction();
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
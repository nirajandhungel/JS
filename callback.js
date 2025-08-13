// Callback is a function passed as an argument

let greet = (name, sayHello)=>{
    sayHello(name);
}
function sayHello(name){
    console.log(`Hello , ${name}!`)
}
greet("Nirajan", sayHello);
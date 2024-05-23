// template literals

let name = "alicia";
let age = 13;
console.log(`hello, my name is ${name} and I am ${age} years old.`)

// arrow functions
const add = function (a, b) {
    return a + b;
}

// default parameters
function greet(name = "Geust") {
    console.log(`hello, ${name}`)
}
greet("Ian")

// spread Operator
// combining Objects
const numbers = [1, 2, 3];
const moreNumbers = [...numbers, 4, 5];
console.log(moreNumbers);


const person = { name: "Ian", age: 30 };
const updatedUser = { ...person, city: "nairobi" };
console.log(updatedUser)

// destructing

const num = [1, 2, 3];
const [a, b, c] = num;
console.log(c)

// calling objects using object literals
const identity = {
    name: "Ian",
    age: 22,
    greet() {
        console.log("Hello")
    }
}
identity.greet();//to call the method "greet"
console.log(identity.name);
console.log(identity.age);

//calling objects using factories

function createPerson(name, age) {
    return {
        name: name, //this is a factory
        age: age, //this is a factory
        greet() {
            console.log(`hello, I am  ${name} and I am ${age} years old`)
        }
    }
}
const ian = createPerson("ian", 22);
ian.greet();

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}


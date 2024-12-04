import React from 'react';


// arrow function
const sum = (a, b) => a + b ;
console.log(`${sum(3, 4)}`);
// Template literal
const name = "Nguyen Van A";
//destructuring assignment
const {name1, age1} = {name1: "Nguyen Van A", age1: 20};
//class
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
}
//module
//file lib.js
// export const sqrt = Math.sqrt ;
// import {sqrt} from 'lib';
// enhanced array manipulation
const array = [1, 2, 3, 4, 5];
const doubled  = array.map(n => n * 2);
console.log(doubled);
//Promise
const promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Success"), 1000);
});
promise.then(result => console.log(result));

// enhanced object manipulation
const ob1 = {name: 'a', age: 20};
const ob2 = {name: 'b', age: 21};
const ob3 = Object.assign({}, ob1, ob2);
console.log(ob3);
//default parameter
const log = (day , date) => {
    console.log(`Good ${day} ${date}`);
}
log('morning', '2024-12-04');
// example 
let person = {
    name: 'Nguyen Van A',
    age: 20,
    greet : function() {
        console.log(`Hello ${this.name} and I am ${this.age} years old`);
    }
}
person.greet();

function example() {
  const x = 10 ;

  if(true) {
    const y = 20;
    console.log(x);
    console.log(y); 
  }
  console.log(x);
  //console.log(y);
}
example();

const App = () => {
  return (
    <>
    </>
  );
}
export default App;

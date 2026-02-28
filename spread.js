const person={name: 'Alice',age:30};
// const person2=person;
// person.salary=36000;
// console.log(person);
// console.log(person2);

// Both output is same

// If i use spread operator

const person2={...person};
person.salary=36000;

console.log(person);
console.log(person2);



// Find max number

const max=Math.max(3,7,1,9);
console.log(max);

// Find max value within array
const numbers=[3,5,1,8,2];
const max1=Math.max(numbers);
const max2=Math.max(...numbers);
console.log(numbers);
console.log(...numbers);
console.log(max1);//output is NaN
console.log(max2);//output is maxvalue


// const arrayValue1=[1,2,3];
// const arrayValue2=arrayValue1;
// arrayValue2.push(4);
// console.log(arrayValue1);
// console.log(arrayValue2);
// both output is same


// using spread operator//

const arrayValue1=[1,2,3];
const arrayValue2=[...arrayValue1];
arrayValue2.push(4);
console.log(arrayValue1);
console.log(arrayValue2);

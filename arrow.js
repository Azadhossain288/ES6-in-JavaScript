const add2=function(num1,num2){

      return num1+num2;
}
console.log(add2(30,40));

// Using arrow function

const add3=(num1,num2) => num1+num2;

console.log(add3(50,60));

const multiple=(a,b)=>a*b;
const add=(a,b,c)=>a+b;
const subtract=(a,b)=>a-b;
const div=(a,b)=>a/b;
const isEven=num=>num%2===0;

console.log(multiple(2,3));
console.log(add(2,3,4));
console.log(subtract(6,2));
console.log(div(6,2));

const doMath=(x,y)=>{

     const sum=x+y;
     const diff=x-y;
     const result=sum*diff;
     return result;

}

console.log(doMath(4,6));

// document.getElementById('btn').addEventListener('click',()=>{
    
// })

document.getElementById('btn').addEventListener('click',(event)=>{


})
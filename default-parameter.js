function add(num1,num2){

      const sum=num1+num2;
      console.log(num1,num2,sum);
}
add(10,20);


// Default parameter

function add1(num1,num2){

      const sum=num1+num2;
      console.log(num1,num2,sum);
}
add(10);

//using default parameter

function add2(num1,num2=0){

      const sum=num1+num2;
      console.log(num1,num2,sum);
}
add2(10);

function fullName(first,last){
      const name=first+ ' '+last;
      console.log(name);
}

fullName('Azad','Hossain');

// using default name

function fullName1(first,last= ''){
      const name=first+ ' '+last;
      console.log(name);
}

// fullName1('Azad');
fullName1('Azad','Hossain');// its possible

function multiply(num1,num2=0){
      const result=num1*num2;
      console.log(result);
}
// multiply(5,10);

 multiply(5);


 function multiply1(num1,num2=1){
      const result=num1*num2;
      console.log(result);
}
// multiply1(5,10);

 multiply1(5);

// Another way
 function greet(name="Guest"){
      
     console.log(`Hello, ${name}!`);
 }
 greet();
 greet("John");
 

 // Default value for different values

//  1.string-> ''
//  2.number-> 0 [for add]
//  3.number-> 1[for multiply]
//  4.array-> []
//  5.object->{}
//  6.boolean-> false;




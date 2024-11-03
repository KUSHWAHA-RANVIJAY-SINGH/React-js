//Arrow Function
//Es 5

// function addition(a,b) {
//     return a + b;
// }
// 

//Es 6
// const addition=(a,b)=>{
//     return a+b;
// }
// console.log(addition(4,5));

//Template Literals
// const Name ='Jhon';
// const greeting = `Hello ,${Name}`;
// console.log(greeting);

//Every function in javascript can have a name property,which returns the name of the function.
// console.log(addition.name);

//Destructuring Assingnement 
// const person = {Name :'Alice' ,age:25}
// const {Name,age} =person;

// console.log('Name :',Name,'Age :',age);


//MAP FUNCTION

// const myArray = ['apple', 'banana', 'orange'];

// const mymap=myArray.map((items)=>{
// console.log({items});
// });

//Spread Operator
const numberOne =[1,2,3,4,5];
const numberTwo =[6,7,8,9,10];
const numbercombine =[...numberOne,...numberTwo];
console.log(numbercombine);

//javascript modules allow you to break up your code into separate file

//javascript modules are used to avoid polluting the global namespace
//Es modules rely on the import and export statements 


import tempCodeRunnerFile from "./tempCodeRunnerFile";

const addition = tempCodeRunnerFile;
console.log(addition(5,6));
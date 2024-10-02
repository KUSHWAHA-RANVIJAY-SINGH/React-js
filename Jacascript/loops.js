// types of loop 

// for loop
// while loop 
// do while loop
// for in loop used for irerating over obeject properties 
// for ..of loop used for iterating over iterable objects like arrays ,strings ,etc.arrays

// for loop 
// for(let i=0;i<5;i++){
//     console.log(i);
// }
// while loop
// let i=0;
// while(i<5){
//     console.log(i); 
//     i++;
// }

// do while loop
// do{
//     console.log(i);
//     i++
// }while(i<7)

// for in loop 

// let person = {name:"john",age:25,city:"newyork"};

// for(let key in person){
//     console.log(person[key]);
// }

// for of loop use for iterating over iterable object like arrays ,string etc

// let arr= [1 ,2,3,4,5];

// for(let value of arr){
//     console.log(value);
//     }



// foreach loop in javascript is specifically used to iterate over arrays and execute a provided function once for each array element its an easier and more readable way to loop through an array when you don't need to break or continue the loop manually 
// it is not a statement but a function that takes two arguments the array and the callback function to
// be executed for each element in the array the callback function takes four arguments the value of the current
// element the index of the current element the array being iterated over and the array being iterated  
// over the callback function is called for each element in the array and it is not called for undefined

// or null elements of the array the callback function is called with the following arguments the value of the  
// current element the index of the current element the array being iterated over and the array being iter


// example 
let numbers =[1,2,3,4,5];

numbers.forEach(function(num){
    console.log(num);
})

console.log('USING ARROW FUNCTION');
// or using arrow function
numbers.forEach(num=>console.log(num))

// or using arrow function with multiple arguments
 numbers.forEach((num,index,arr)=>console.log(num,index,arr))

// print index number 

numbers.forEach(function(num, index){
    console.log(`${index} : ${num}`);
    
})

//In JavaScript, map() is an array method that creates a new array by applying a function to each element of the original array. Unlike forEach(), which executes a function for each element but doesn’t return a new array, map() transforms each element and returns a new array with the transformed values.

let names = ['ranvijay', 'keshu', 'abhishek', 'rishu', 'mohan'];

let upperCasewords = names.map(function(name_user) {
    return name_user.toUpperCase();
})
console.log(upperCasewords);


// using arrow function

let lowercase = names.map(word => word.toLowerCase());
console.log(lowercase);


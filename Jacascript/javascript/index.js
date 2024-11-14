// var myName ='Ranvijay singh';
// console.log(myName);

// var myage=29;
// console.log(myage);

// it is not valid
// var 1myname='ranvijay singh kushwaha';


// console.log(_1myname);



// Section 4 data types in javascript

// var myName = "Ranvijay singh kushwaha";
// console.log(myName);
// var age =19;
// var ranvijay=true;

// type of operator
// console.log(typeof(age));
// console.log(typeof(myName));

// console.log(typeof(ranvijay));

// Datatype practice

// console.log(50 +"50");

// console.log(30-"4");  // bug 

// console.log("java  " +"script" );

// console.log("java" - "script");  // nan 

// console.log(true +true);
// console.log(true +false);

//Difference between null vs undefined

// var iAmuseless = null;
// console.log(iAmuseless);
// console.log(iAmuseless); // 2nd bug

// var iAmstudent;
// console.log(iAmstudent);

// NAN is a property of the global object .
 // In other words , it is a variable in global scope.
// The initial value of NaN is NOt-a-number.
 
// var myphonenumber=9905281952;
// var myname = 'kushwaha ranvijay singh';

// console.log(isNaN(myname));
// console.log(isNaN(myphonenumber));

// if(isNaN(myname)){
//     console.log("please enter valid phone no");
// }


// section 5 Arithimatic operation

// console.log(30+30);
// console.log(40-4);
// console.log(40*4);
// console.log(40/4);
// console.log(40%7);

// Increment and Decrement operator 
// Operator: x++ or ++x or x-- or --x
//If used postfix,with operator after operand (for exampler,x++),
// the increment operator increments and returns the value before incrementing.                         

// var num =15;
// var newNum =num++;
// console.log(++num)
// console.log(num);
// console.log(newNum);
// console.log(++num);

//the decrement operator decrements and returns the value 

// var num =45;
// var newvar =num--;
// console.log(newvar);
// console.log(--num);

//comparison operators 
// A comparision operator compares its ooperand and 
// returns a logical value based on whether the comparison is true.

// var a =30;
// var b =40;
 // Equal
//  console.log(a==b);

 //Not equalto(!=)\
//  console.log(a !=b);

// Greater than(>)
// console.log(a>b);
 
//LEss than (<)
// console.log(a<b);

// Greater than or equal to
// console.log(a>=b);

//Less thand or equal to (<=)
// console.log(a<=b);

//Logical operators 
// Logical operators are typically used with Boolean (logical) values;
var a=20;
var b=30;

// Logical AND(&&)
//The logical AND (&&) operator (logical conjuction) for a set of 
// operands is true if and only if alll of its operands are true.

// console.log(a>b && b>20);
// Logical OR(||)
// the logical OR (||) operator (logical disjunction) for a set of
// operands is true if and only if one of more of its operands is true.

// console.log(a>b || b>a);

// Logical NOT(!)
//the logical Not (!) operator (logical complement, negation)

// console.log(!(a>b || b>a));

//String Concatenation(operators)
// The Concatenation operator (+) conctenates two string values together,
// returning another string that is the union of the two operand string.

// console.log("Hello world");

// console.log("Hello " + "World");

// var myname ="Ranvijay";
// console.log(myname + " Kushwaha");
// console.log(myname+" Singh");


// 4 challenge Time 
//What wil be the output of 3**3 ?
// what will be the output, when we add a number and a string ?
//Write a program to swap two numbers ?
//Write a program to swap  two numbers without usin third variable ?

//sol 1
// console.log(3**3);
// console.log(10 ** -1)

//Sol 2:
//  console.log(5 +"Ranvijay");

//Sol 3:

// var a=5;
// var b=56;

// output b=; a=10
// var c=b;  //c=56
// b=a;
// a=c;
// console.log("The value of a is:" + a);
// console.log("The value of b is:" + b);

//Sol 4
// var a=10;
// var b=5;

//output a=5 b=10

// a =a+b; //15
// b= a-b;  // 15-5
// a=a-b; //15-10=5
// console.log("The value of a is:" + a);
// console.log("The value of b is:" + b);

//Interview question 4 
// What is the Difference between == vs === ?

// var num1 = 10;
// var num2 = '10';
// console.log(typeof(num1));
// console.log(typeof(num2));
// // using double equal to only cheack the number.
// console.log(num1 == num2);

// // using triple equal to cheack the number and datatype.

// console.log(num1===num2);

//Sewction 6 .control statement & loops 

// the if statement executes a statement if a specified condition is truthy.
// if the condition is falsy , another statement can be executed.

// var tomr ='rain';
// if(tomr == 'rain'){
//     console.log("take a raincoat");
// }else{
//     console.log("No need to a raincoat");
// } 

// //Write a program thar works out whether if a given year is a leap year or not?

// var year =2020;
// debugger;
// if(year % 4 === 0){
//     if(year % 100 === 0){
//         if(year % 400 === 0){
//             console.log("This year is " +year+" is  a leap year");
//         }
//         else{
//             console.log("This year is " +year+" is not a leap year");
//         }
//     }else{
//       console.log("This year is " +year+" is  a leap year");
//     }
// }else{
//     console.log("This year is " +year+" is not a leap year");
// }


// What is truthy and falsy values in javascript ?

// // we have total 5 falsy values in javascript 
// // o ,"", undifined ,null ,NaN, false** is false anyway

// if(score =0){
//     console.log("YAy, We won the game ");
// }else{
//     console.log("OMG , we loss the game ");
// }

//2 conditional (ternary) operator 

//The conditional (tenary) is the only javascript operator
//That takes three operand 

// var age =19;
// if(age>= 18){
//     console.log("you are eligible to vote");
// }else{
//     console.log("you are not eligible to vote");
// }

// // if else short hand .

// var age=19;
// console.log((age >= 18) ? "you can vote":"you can't vote");

// 3 switch statement 
// Evaluates an expression , mathcing the expression's value to a 
// case clause, and executes statements associated with that case,

//1st without break statement 
//Find the Area?

// var Area="circle";
// var PI = 3.142,l=5,b=4,r=3;

// switch(Area){
//     case 'circle':
//         console.log("The area of the circle is :" + PI*r**2);
//         break;
//         case 'Triangle':
//             console.log("The area of the triangle is:"+(l*b)/2);
//             case 'rectangle':
//           console.log("The area of the rectangle is:"+(l*b));

//           default:
//           console.log('Please enter the valid data');
// }

// 4 while loop statement 
//The while statement creates a loop that executes a specified statement 
// as long as the condition evaluates to true.

// var num =2 ;
// // block scope
// while(num <= 10){
//     console.log(num);
//     num++;
// }

// 5 DO while loop

// do{
//     console.log(num);
//     num++;
// }while(num<=10)


// //for loop
// for(var num=0;num <= 10; num++ ){
//     console.log(num*2);
// }


// //6 challenge time
// //javascript program to print table for given number (8)?

// for(var num=1;num<=10;num++){
//     var tableof=8;
//     console.log(tableof + " * " + num + " = " + tableof*num)
// }
  

//Function Definition
//Before we use a funcition ,we need to define it.
//A function definition (also called a function delaration , or function statement)
//consists of the function keyword,followed by:
//The name of function.
//A list of parameters to the function,,enclosed in parentheses and separated by commas.
//The javascript statements that define the function,enclosed in curly brackets,{...}.

// function defination
/* function functionName(){
    statement
}*/

// function sum(){
//     var a =10,b=30;
//     var total = a+b;
//     console.log(total);
// }

// sum();

//3 Function Parameter vs Function Arguments
//Function paramenters are the names listed in the function's definition.
//Function arguments are the real values passed to the function.

// function sum(a,b) {      //Parameters
//     var total =a+b;
//     console.log(total);
// }
// sum(10,45); //arguments

//Interview Question

//Why Functions?
//You can reuse code: Define the code once,and use it many times.
//YOu can use the same code many times with defferent arguments,
//to produce different results.

  //or

//A function is a group of reusable code which can be called anywhere 
// in your program. this eleminates the need of writing the same code 
//again and again.

// 4 Function expressions 
//"function expressions simply means "
// create a function and put it into the  variable


// function sum(a,b) {      //Parameters
//     var total =a+b;
//     console.log(total);
// }
// sum(10,45); //arguments

// var funcitionexpression= sum(20,40);
// funcitionexpression; //extra

//5 Return keyword
//When javascript reaches a return starement,
//the function will stop executing.

//Functions often compute a return value.
//The reutn value is "returned" back to the "caller"



// function sum(a,b) {      //Parameters
//     return total =a+b;
    
// }

// var funexpr= sum(59,5);
// console.log("the sum of two no is :" + funexpr);




// 6 Anoymous Function

//A function expression is similar to and has the same syntax
//as a function declartion One can define "named"
//function expressions (where the name of the expression might)
// be used in the call stact for example
//or "anonymous" function expresssion.



// var funExp =function sum(a,b) {      //Parameters
//     return total =a+b;
    
// }

// var sum= funExp(59,55);
// var sum1=funExp(54,4); 
// console.log("the sum of two no is :" +sum);
// console.log(sum>sum1);





//Now It's time for Modern javascript 
// Ecmascript 6 
//Let vs const 

// var => Function scope
//let and const => Block scope.

// let myName ='Ranvijay';
// console.log(myName);

// myName ='ranvijay singh';
// console.log(myName);


// var myName ='Ranvijay';
// console.log(myName);

// myName ='ranvijay singh';
// console.log(myName);


// const myName ='Ranvijay';      // it is not possible .
// console.log(myName);

// myName ='ranvijay singh';
// console.log(myName);


// //** */ 2 Template literals (Template string)

// // Javascript program to print table for given number(8)?

// for (let num =1;num<=10;num++){
//   let tableOf =12;
//   // console.log(tableOf +" * " + num +" = " + tableOf*num);

//   console.log(`${tableOf} * ${num} = ${tableOf*num}`);
// }

// // # 3 Default Parameters 
// // Default function parameters allow named parameters to be
// // initialized with default valued if no value or undefined is passed.

// function mult(a,b=4){
//   return a*b;
// }

// console.log(mult(7));


// #6 Fat Arrow function 

// // Normal way of writing function 
// console.log(sum());

// function sum(){
//   let a=19;
//   let b=56;
//   let sum=a+b;
//   return `the sum of the two numbers is ${sum}`
// }


// how to convert in into fat arrow function 

// const sum =()=>{
//   return `the sum of the two numbers is ${(a=4)+(b=3)}`
// };

// console.log(sum());

// // # section 7 Arrays in javascript 

// // when we use var , we can stored only one value at a time .
// var friend1 ="mohan";

// When we feel like storing multiple values in one variable then
// instead of var ,we will use an array.
// in javascript , we have an Array class,and
// arrays ate the prototype of this class.

// var myfriends = ['vinod' , 'Ranvijay' , 'Mohan'];
// console.log(myfriends[0]);

// //if we want to check the length of elements of an array
// console.log(myfriends.length);

// const person ={ firstname:'ranvijay',lastname:'singh',age:20};
// console.log(myfriends.length);
// console.log(myfriends.sort());

// myfriends.push("Devil");
// for(let i=0;i<myfriends.length;i++){
//   console.log(myfriends[i] );
// }

// //Array.prototype.forEach()
// //Calls a function for each element in the array.

// for(let elements in myfriends){
//   console.log(elements);
// }
// for(let elements of myfriends){
//   console.log(elements );
// }

// ... spread /rest
// spread use hota hai copy ya fir us location par kisi aur ki value bikherne ke liye 
// rest use hota hai jab aapko bache huye values ek variable mei daalne no 

// //spread ka matlab hai element ke saare values ko us jagah par biher dena

// function abcd(a,b,c,...d){
//   console.log(a,b,c,d);
// }
// abcd(1,2,3,4,5,6,7,8);

// var a=[1,2,3,4,5,6,7,8];
// var b=a;
// // console.log(b);

// new Promise((res,rej)=>{
//   if(true){
//     return res();
//   }
//   else{
//     return rej();
//   }
// })
// .then(function (){
//   console.log("resolve ho gaya");
// })
// .catch(function (){
//   console.log("reject ho gaya")
// })

// var ans =new Promise((res,rej)=>{
//   var n = Math.floor(Math.random()*10);


//   console.log(n);
//   if(n<5){
//     return res();
//   }
//   else{
//     return rej();
//   }
// })
// ans.then(function(){
//   console.log("below");
// })
// .catch(function(){
//   console.log("above");
// })


//async wait

// koi bhi esa function jisme aap async code likhege,kyoki async code hai to aap promises ka istemaal kar sakte hai,jab uska answer aayega then lagana padega,us then ko lagaane se bachne ke liye ,aap async awai ka istemaal kar sakte hai.

// async function abcd(){
//  let raw = await fetch(`https://randomuser.me/api/`);
//  let ans =raw.json();
//  console.log(ans);
// }



//**************** Numbers *****************

// const score =100;
// console.log(score)
// let balance =new Number(500)
// console.log(balance);

// // let newblance =balance.toFixed(4);
// let newblance =balance.valueOf();
// console.log(newblance);

// ++++++++++++++ Maths ++++++++++++++++++++++++

let num =20;
//Math Random Function generate the random value 
console.log(Math.random());

console.log(Math.random()*10+1);
console.log(Math.floor(Math.random()*10+1));

let min=10;
let max=30;

//Random Value generate between 10 to 30 
console.log(Math.floor(Math.random()*(max-min +1)+min))



//+++++++++++++++++++++++++++ DATE ++++++++++++++++++++++++++++++++++++++

let date= new Date();

console.log(date.toLocaleDateString());
console.log(date.toLocaleTimeString());
console.log(date.toUTCString());
console.log(date.toISOString());
// console.log(date.toLocaleString());
// console.log(date.toISOString());
console.log(date.toDateString());
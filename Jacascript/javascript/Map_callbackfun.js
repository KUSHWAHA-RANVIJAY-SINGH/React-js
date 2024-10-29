const mynum =[1,2,3,4,5,6,7,8,9,10];

// const value=mynum.forEach((num)=> num);
// console.log(value);
// for each not return the value always return the value is undefined ..

// const mynewnum =mynum.filter((num)=> num >3);
// // filter return the value of the array that match the condition
// console.log(mynewnum);

const mynewnum =mynum.map((num)=> num*10).map((num)=>num+3).filter((num)=> num>14)
// map return the value of the array that match the condition

console.log(mynewnum);

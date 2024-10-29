// function addtwo_number(Number1,Number2) {   
//     console.log(Number1+Number2);
    
// }


// //This is correct 
// function addtwo_number(Number1,Number2){
//     return Number1+Number2;

// }

// const addition=addtwo_number(12,34);
// console.log(addition);


// //User login or not login

// function loginUserMessage(username) {
//     if (username === undefined) {
//         console.log("Please enter the username");
//         return
//     }
//     return `${username} Logged in`;
// }
// console.log(loginUserMessage("Ranvijay"));

// //Rest Operator
// function Numbers(...num1) {
//     return num1;    
// }

// console.log(Numbers(12,3,2,4));

// const User={
//     name:"Ranvijay",
//     age:22
// }
// function handleObject(anyobject) {
//     console.log(`UserName is ${anyobject.name} and age is ${anyobject.age}`);
// }
// handleObject(User);

//Arrow Function

const myNewArray =[200,400,100,600];

function returnSecondValue(getArray) {
    return getArray[1];    
}
console.log(returnSecondValue(myNewArray));
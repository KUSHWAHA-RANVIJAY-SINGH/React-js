//This keyword is use the point the current context.

//It is used to point the current context to the parent context.

// const user ={
//     username :"Ranvijay",
//     age:22,

//     welcomeMessage : function(){
//         console.log(`${this.username} Welcome to Website`);
//     }
// }

// user.welcomeMessage();
// console.log(user.username);
// user.username ="Mohan Bhai";
// user.welcomeMessage();

// console.log(this)// this keyword return the empty object in node and browswer retutn the windows global


// function mahi(){
//     let username ="ranvijay"
//     console.log(this.username)  // undefined 
// }
// mahi();


// const mahi = () => {
//     let username = "ranvijay"
//     console.log(this.username)  // undefined
//     console.log(this)    // return the empty object 
// }
// mahi();


// const addTwo =(num1,num2) =>{
//     return num1+num2
// }
// console.log(addTwo(2,4));



// const addTwo =(num1,num2) =>  num1+num2   // not used the carli barces then not used the return keyword
// console.log(addTwo(2,4));


// const addTwo =(num1,num2) => ( num1+num2)   // used to parthesis then not used to return keyword
// console.log(addTwo(2,4));

//Object 

// const mahi =() => ({name:"ranvijay"})

// console.log(mahi.name)
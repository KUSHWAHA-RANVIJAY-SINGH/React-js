// const promiseOne =new Promise(function(reslove,reject){
//     setTimeout(function(){
        
//         console.log("Async task is completed");
//         reslove();
//     },1000)
// })

// promiseOne.then(function(){
//     console.log("Promise consumed");
// })

//Second method to create a promise

// new Promise((reslove,reject)=>{
//     setTimeout(() => {
//         console.log("Async task 2");
//         reslove();
//     }, 2000);
// }).then(function() {
//     console.log("Async 2 resloved");
// })

// const promiseThree =new Promise((reslove,reject)=>{
//     setTimeout(() => {
//         reslove({username:"ranvijay",email:"ranvijay@gmail.com"});
//     }, 2000);
// })

// // promiseThree.then((user)=>{
// //     console.log(user);
// // })
// promiseThree.then(function(user){
//     console.log(user.username);
// })


// const promiseFour =new Promise(function(reslove,reject){
//     setTimeout(() => {
//         let error =false;
//         if(!error){
//             reslove({username :"ranvijay",email:"ranvijay@gmail.com"});
        
//         }else{
//             reject("Error");
//         }
//     }, 1000);
// })

// promiseFour.then((user)=>{
//     console.log(user);
//     return user.username;
// }).then((username)=>{
//     console.log(username);
// }).catch(function(error){
//     console.log(error);
// }).finally(()=> console.log("The promise is either resolved or rejected"));

// const promisefive =new Promise(function(reslove,reject){
//     setTimeout(() => {
//         let error =false;
//         if(!error){
//             reslove({username:"javascript",password:"1234"});
//         }else{
//             reject("Error :js went wrong");
//         }
//     }, 1000);
// })

// async function consumepromisefive() {
//     try{
//         const user = await promisefive;
//         console.log(user)
//     }catch(error){
//         console.log(error);
//     }
// }
// consumepromisefive();



// async function getAllUsers(){
//         try {
//             const response = await fetch('https://jsonplaceholder.typicode.com/users')
    
//             const data = await response.json()
//             console.log(data);
//         } catch (error) {
//             console.log("E: ", error);
//         }
//     }
    
//     getAllUsers();

fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json();
}).then((data)=>{
    console.log(data);
}).catch((error)=>{
    console.log(error);
})
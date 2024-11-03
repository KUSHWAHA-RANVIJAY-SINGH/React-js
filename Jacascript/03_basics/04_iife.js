//Immediately Invoked Function Expressions (IIFE)

(function chai() {
    //Named IIFE
    console.log("DB CONNECTED");
})();

//Arrow Function 
(()=>{
    //Simple IIFE
    console.log("DB CONNECTED Two");
})();


//Pass the parameters 
((name)=>{
    //Simple IIFE
    console.log(`DB CONNECTED Two ${name}`);
})("Ranvijay");

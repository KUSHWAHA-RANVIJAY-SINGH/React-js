// asynchronous operations handle


// setTimeout()	Execute a function once after a delay

//settimeout ek baar ke liye function ko delay ke saath execute karta hai.yeh code ko specified delay ke baad execute karta hai.

// setTimeout(() => {
//     console.log("Hello, after 2 seconds!");
// }, 2000);

// setInterval()    setInterval ek function ko repeatedly execute karta hai, har baar ek specified delay ke baad.
// Jab tak clearInterval() call nahi kiya jata, yeh interval baar-baar repeat hota hai

// const intervalId =setInterval(()=>{
//     console.log("Hello , every 2 seconds");
    
// },2000)

// //stop the interval after 10 seconds
// setTimeout(() => {
//     clearInterval(intervalId);
// },10000 );


//3 clearTimeout()  
// clearTimeout ka use setTimeout ke through scheduled function ko cancel karne ke liye hota hai.
// Jab hum setTimeout call karte hain, to humein ek timeout ID milti hai jo is scheduled operation ko identify karti hai. Us ID ka use karke hum clearTimeout se isko cancel kar sakte hain.

// const timeoutId =setTimeout(() => {
//     console.log("This will not run")
// }, 2000);
// clearTimeout(timeoutId);

//4.clearInterval()
// clearInterval ka use setInterval ke through scheduled repeating function ko stop karne ke liye hota hai.

// const intervalId =setInterval(()=>{
//     console.log("repeat every second");
// },1000);

// setTimeout(() => {
//     clearInterval(intervalId);
// }, 4000);


// requestAnimationFrame browser ko batata hai ki woh animation ko render karne se pehle ek function ko call kare.
// Yeh frame-based timing hai jo 60 frames per second ke rate se kaam karti hai (browser ka refresh rate).

// function animate() {
//     console.log("Animating frame...");
//     requestAnimationFrame(animate); // Recursive call for animation
// }

// requestAnimationFrame(animate);



// setImmediate() (Node.js mein)
// setImmediate sirf Node.js environment mein available hota hai aur is function ko as soon as possible execute karta hai jab JavaScript call stack empty hota hai.
// Yeh browser mein available nahi hota, sirf Node.js mein hai.


setImmediate(() => {
    console.log("Executed immediately after I/O events");
});

//process.nextTick()
// process.nextTick bhi Node.js mein available hota hai aur yeh function ko next event loop cycle ke beginning mein hi run kar deta hai.
// Yeh high priority par hota hai aur even setImmediate se pehle execute hota hai.

process.nextTick(() => {
    console.log("Executed at the start of the next event loop cycle");
});

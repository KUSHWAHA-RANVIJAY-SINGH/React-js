const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach(function(val1) {return console.log(val1)})

// coding.forEach((item) =>{
//     console.log(item);
// })


// //callback function means without the function name 
// function printMe(item) {
//     console.log(item)
// }
// //you can print the element using the function name 
// coding.forEach(printMe);



const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach((item) =>{
    console.log(item.languageName, item.languageFileName)
})
let score = "33"

console.log(typeof score)

let scorevalue =Number(score);
console.log(scorevalue);
console.log(typeof scorevalue);

let isLoggedIn ="ranvijay";

let boolenIsLoggedIn =Boolean(isLoggedIn);
console.log(boolenIsLoggedIn);



//"33" = 33
// "33abc" => NaN
// true => 1; false =>0  
// ""  Empty string => false 
// "ranvijay"  => true

typeof "John"         // Returns string
typeof ("John"+"Doe") // Returns string
typeof 3.14           // Returns number
typeof 33             // Returns number
typeof (33 + 66)      // Returns number
typeof true           // Returns boolean
typeof false          // Returns boolean
typeof 1234n          // Returns bigint
typeof Symbol()       // Returns symbol
typeof x              // Returns undefined

typeof {name:'John'}   // Returns object
typeof [1,2,3,4]       // Returns object
typeof new Map()       // Returns object
typeof new Set()       // Returns object

typeof function (){}   // Returns function


//**********************Operations*********************

// === Strict Check data type and value 


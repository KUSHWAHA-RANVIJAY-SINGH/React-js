//stirng practice 
// // let text = "We are the so-called \"Vikings\" from the north.";
// let text = "The character \\ is called backslash.";

// console.log(text);

// Templates were introduced with ES6 (JavaScript 2016).

// They are a way to insert variables into strings.

// string interpolation is a method of embedding expressions within string literals. You can achieve this by using template literals, which are enclosed by backticks (`) instead of the traditional single (' ') or double (" ") quotes
// let name ="   Ranvijay  " ;
// let age = 25;

// let myinfo= `My name is ${name} and age is ${age}`;
// console.log(myinfo);


// Basic String Method
      
      
// let txt1= "RanVijay";

// //String length 
// console.log(txt1.length);
// //String toUpperCase
// console.log(txt1.toUpperCase());
// //String toLowerCase
// console.log(txt1.toLowerCase());


// //String trim
// console.log(name)
// console.log(name.trim());


// //String concat 
// var txt1 ="Hello Ranvijay";
// console.log(text.concat(" "+ txt1))
// console.log(`${text} ${txt1}`);
// //String charAt
// console.log(txt1.charAt(7));

// //String repeat
// var txt1 ="Hello Ranvijay "
// console.log(txt1.repeat(6+ " "));

// //replace and replace all method in String


// let text = "I love cats. Cats are very easy to love. Cats are very popular";

// text = text.replaceAll(/cats/g,"Dogs");
// text = text.replaceAll(/Cats/g,"dogs");
// let text1=text.replace("cats","dogs")
// console.log(text1);
// console.log(text)

// // Property Access [ ]
// let name = "Ranvijay";
// console.log(name[5]);

// Extracting String Parts
// There are 3 methods for extracting a part of a string:

// slice(start, end)
// substring(start, end)
// substr(start, length)

let text = "Hello Ranvijay,Mohan , Shohan";
let text1 = text.slice(4, 18);
console.log(text1);

text1 =text.substring(4,18);
console.log(text1);
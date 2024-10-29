//********************* Object */

// // In JavaScript, an object is a standalone entity, with properties and a type. It's a fundamental data structure in JavaScript used to store keyed collections of various data and more complex entities. JavaScript objects are essentially a collection of key-value pairs.

// // Creating an Object
// // Object Literal Notaions 
// //2. Using the Object Constructor 
// //3. Using the Object.create() method
// //4. Using the class keyword
// //5. Using the Object.assign() method
// //6. Using the Object.create() method with a prototype
// //Object Literal Notaions 
// let person = {
//     name:{
//         first_name:"Ranvijay",
//         last_name:"Kushwaha"
//     },
    
//     age :22,
//     city: 'New York',
//     isStudent: true
// }
// //2.Using the Object Constructor

// let student =new Object();
// student.name = "Ranvijay";
// student.age = 22;   
// student.city = "New York";


// //3.Using a Constructor Function:
// function Student(name, age, city) {
//     this.name = name;
//     this.age = age;
//     this.city = city;
//     }


//     //4.Using the class keyword
//     class Student {
//         constructor(name, age, city) {
//             this.name = name;
//             this.age =age;
//             this.city = city;
//             }
//             }




// Accessing and Modifying Properties
// Dot Notation

// console.log(person.name)
//Bracket Notation (useful when property names are dynamic or not valid identifiers)
// console.log(person['name']);
// Modifying Properties
// person.name = 'Ranvijay Kushwaha'
// console.log(person.name.first_name)

//Delete property
// delete person.name.last_name;
// console.log(person.name.last_name)


// Methods in Objects
// A method is simply a function stored as an object property.

let person ={
    name: 'Ranvijay',
    age: 22,
    greeting: function () {
        console.log("Hello ," +this.name);
    }
}
person.greeting();


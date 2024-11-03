 // for of 
 // ["","",""]
//  {"","",""}

const arr =[1,2,3,4,5]
for (const num of arr) {
    // console.log(num)
}

const greeting ="Hello World ";
for (const greet of greeting) {
    // console.log(`Each char is ${greet}`);
}

//Maps 
const map =new Map();
map.set("In","India")
map.set("USA","United states of America")
map.set("Fr","France")
map.set("NP","Nepal")


//Map and Array is iterable for using forof loop
// console.log(map)

// for (const [key,value] of map) {
//     console.log(key, "=" ,value);
// }


const myObject ={
    game1 :"NFS",
    game2 :"BGMI"
}

// Object  is not iterable  using the forof loop  you use the forin loop to iterable the object 
// for (const [key,value] of myObject) {
//     console.log(key,"=",value);
// }
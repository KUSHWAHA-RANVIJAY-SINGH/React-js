// slice and splice are methods used on arrays, but they work differently.

// slice extracts a portion of an array without changing the original.
// splice changes the array by adding or removing elements.

//Array in javascript are versatile objects that allow you to store multiple values in a single variables . they can hold a mix of different data types and are resizeable .

// const name = ["hello", "Ranvijay", "Mohan", "Shohan", "Kali", "Kalki", "Golu"];
// console.log(name.slice(1,4)); //output: ["Ranvijay", ";
// console.log(name.length);
// name.push("Raju");
// console.log(name.join("-"));
// console.log(name.length);
// console.log(name[7]);
// name.pop();
// console.log(name.length);

//The indexOf() method of Array instances returns the first index at which a given element can be found in the array, or -1 if it is not present
// console.log(name.indexOf("Kalki"));

//Join
// The join() method of Array instances creates and returns a new string by concatenating all of the elements in this array, separated by commas or a specified separator string. If the array has only one item, then that item will be returned without using the separator.

// const elements = ["Fire", "Air", "Water"];
// console.log(elements);
// console.log(elements.join());
// console.log(elements.join('-'));
// console.log(typeof elements);  //object

// A JavaScript array's length property and numerical properties are connected.


//************************** map ******************** */

//The map() method of Array.instances creates a new array populated with the results of calling a provided function on every element in the calling array.

// The map() method calls a provided function once for each element in an array and returns a new

// const array1 =[1,2,3,4,5,6];
// //Pass a function to map
// const map1 =array1.map((x)=>x*2)
// console.log(map1)
// console.log(array1);

//************************** reverse ******************** */

// const array1 = ['one', 'two', 'three'];
// //reverse() method use then the orginal value will be change to without chanage the orginal array to use the toreverse() method 
// const reverse_array=array1.reverse();
// console.log(reverse_array);[ 'three', 'two', 'one' ]
// console.log(array1)[ 'three', 'two', 'one' ]  //Original array value is reverse 

// //toreversed()
// // The toReversed() method returns the reversed array, it does not change the original array.
// const array2 = ['one', 'two', 'three'];
// const reverse_array2=array2.toReversed();
// console.log(array2);
// console.log(reverse_array2);


//************************** reverse ******************** */


// The shift() method of Array instances removes the first element from an array and returns that removed element. This method changes the length of the array.
// const array1 =[1,2,3,4];
// console.log(array1.shift());
// console.log(array1);

//Copy the array1 to array2 concat
//using the spread operator and concating menthod 

const array1 =[1,2,3,4,];
const array2 =[5,6,7,8,9];

// const new_array= [array1+array2];
// console.log(new_array)
// console.log( new_array.join(','))


//**************  Using the spread operator  */

// const new_array= [...array1,...array2];
// console.log(new_array);
// console.log(new_array.join(','));
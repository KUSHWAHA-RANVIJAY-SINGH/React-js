const userEmail =[]

if (userEmail) {
    console.log("Got User email");
}
else{
    console.log("No User email");
}


//falsy values 

// false ,0,-0,BigInt,0n,"",undefined,Nan

//truthy values 
// "0",'false'," ",[],{},function(){}

// if (userEmail.length ==0) {
//     console.log("Array is Empty")
// }


const EmptyObj ={};
if (Object.keys(EmptyObj).length==0) {
    console.log("Object is empty")
}

//Nullish Coalescing Operator (??) : null undefined

let val1;
// val1 = 5 ?? 10;
// val1 = null ?? 13; 

val1 = undefined ?? 30;
console.log(val1); // Output: 5  ,13

//Terniary Operator 
//condition ? true :false
const iceTeaPrice =100
iceTeaPrice <= 80 ? console.log("less than 80"):console.log("more than 80");
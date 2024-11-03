const myObject ={
    game1 :"NFS",
    game2 :"BGMI",
    game3 :"SpiderMan",
    game4:"Free Fire"
}

for (const key in myObject) {
    // console.log(`${key} is ${myObject[key]}`);
}

const programming =["js","rb","py","java","cpp"]

for (const key in programming) {
    // console.log(programming[key]);
}


// const map =new Map();
// map.set("In","India")
// map.set("USA","United states of America")
// map.set("Fr","France")
// map.set("NP","Nepal")

// for (const key in map) {
//    console.log(map[key])   //Not output is show forin loop is not working in map method 
// }
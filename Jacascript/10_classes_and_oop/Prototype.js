// let myname ='Ranvijay    ';

// console.log(myname.trim().length)

let myHeros =['thor', 'spiderman'];

let heroPower ={
    thor :"hammer",
    spiderman :"sling",

    getSpiderPower: function(){
        console.log(`spidy power is ${this.spiderman}`);
    }
}


Object.prototype.ranvijay =function(){
    console.log(`ranvijay is present in all objects`);
}

Array.prototype.heyranvijay =function(){
    console.log(`Hey Ranvijay`);
}
// heroPower.ranvijay()
// heroPower.heyranvijay();  //not accessiable

// myHeros.heyranvijay();
// myHeros.heyranvijay()


//inheritance 

const User ={
    name :'ranvijay',
    email :'ranvijay@gmail.com'
}

const Teacher ={
    makeVideo :true,
    isteacher :true
}

const TeachingSupport={
    isAvilable :false

}

const Student ={
    isStudent :true,
    isTeacher :false,
    __proto__ :User
}

//Access the one element to another 
// console.log(Student.User)

// Teacher.__proto__ =User

// console.log(Teacher.name)

//morden Syntax 
// Object.getPrototypeOf(TeachingSupport,Teacher)
// console.log(TeachingSupport.isAvilable);


let anotherName ='Mohan      '

String.prototype.truelength =function(){
    console.log(`${this}`);
    console.log(`True length is:${this.trim().length}`);
}

// console.log(anotherName.length)  //Not true length 

anotherName.truelength();

'Ranvijay'.truelength();
'Chai'.truelength();
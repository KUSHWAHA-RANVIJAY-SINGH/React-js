class User{
    constructor(UserName,email,password){
        this.UserName=UserName;
        this.email =email;
        this.password =password;
    }

    encryptyPassword(){
        return `${this.password}abc`;
    }
    changeUserName(){
        return `${this.UserName.toUpperCase()}`
    }
}

const chai =new User("ranvijay","ranvijay@gmail.com","abc123");

// console.log(chai.encryptyPassword());
// console.log(chai.changeUserName());

//behind the scene 

function User1(UserName,email,password){
    this.UserName=UserName;
    this.email =email;
    this.password =password;
}

User1.prototype.encryptyPassword =function(){
    return `${this.password}abc`;
    
}
User1. prototype.changeUserName =function(){
    return `${this.UserName.toUpperCase()}`
}

const tea =new User1("tea","tea@gmail.com","123")

console.log(tea.encryptyPassword())
console.log(tea.changeUserName());
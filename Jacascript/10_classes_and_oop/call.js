function SetuserName(username) {
    this.username =username;
    console.log("called");
}

function createUser(username,email,password) {
    SetuserName.call(this,username);

    this.email =email;
    this.password =password;
}

const User =new createUser("ranvijay","ranvijay@gmail.com",'ranviajy122');

console.log(User.username);


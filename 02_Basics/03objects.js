//singleton == Singleton pattern is a design pattern which restricts a class to instantiate its multiple objects. It is nothing but a way of defining a class. Class is defined in such a way that only one instance of the class is created in the complete execution of a program or project.

//Object.create //here singleton is created

//by deaflut key is treated as string


//object literals
const mySym = Symbol("keys")
const Jsuser = {
    name: "Vivek" ,
    [mySym] : "myKeys1",
    "full name" : "Vivek Gupta",//it is only accesed by [ method] ,
    age: 18 ,
    location : "Delhi",
    email :"vivek@google.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday" , "Saturday"]

}

//Different ways to access object

// console.log(Jsuser.email);
// console.log(Jsuser["email"]);
// console.log(Jsuser["full name"]);

Jsuser.email = "vivek@chatgpt.com"
// Object.freeze(Jsuser);

Jsuser.email = "vivek@microsoft.com"

//console.log(Jsuser);

Jsuser.greeting = function(){

    console.log("Hello Js User");

}
//this is pointing towards the object Jsuser
Jsuser.greetingTwo = function(){
    console.log(`Hello Js User, ${this.name}`);
}

console.log(Jsuser.greeting());
console.log(Jsuser.greetingTwo());
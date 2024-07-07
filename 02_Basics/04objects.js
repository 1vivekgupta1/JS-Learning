//singleton is create using new object()
// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false
// console.log(tinderUser);

const regularUser ={

    email : "some@gmail.com" ,
    fullname :{

        userfullname :{

            firstname: "Vivek",
            lastname : "Gupta"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a" , 2: "b"}
const obj2 = {3: "a" , 4:"b"}
const obj3 = {5:"a" , 6:"b"}

// obj4 = {obj1 , obj2}//not good method
// const obj4 = Object.assign({} , obj1 ,obj2 , obj3) //assign value of obj1,2, 3 in obj {}

const obj4 = {...obj1 , ...obj2 , ...obj3}
// console.log(obj4);


const users = [

    {
        id : 1,
        email : "h@gmail.com"
    },
    {
        id:2,
        email:"h@gmail.com"
    },
    {
        id:3,
        email:"h@gmail.com"
    }
]


users[1].email
// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty("isLoggenIn"));


//Destructering

const course = {
    coursename:"js in hindi",
    price:999,
    courseInstructor: "hitesh"
}

// course.courseInstructor 
//destructuering
const {courseInstructor : instructor} = course
// console.log(courseInstructor);
console.log(instructor);
//earlier api return XML structure but now they return JSON which is like a object but without name
/*
{
    "name":"hitesh",
    "coursename": "js in hindi"

}
    */
// group of data 
var student = {
    name: "saira",
    class: "2nd Year",
    section: "B",
    active: null,
    classDays: ["tues", "monday"],
    school: {
        sName: "SMIT"
    },
    getData: function () {
     alert('Hi')
    },
    // getData: () => {
    //     alert('Hi')
    // },
    getData : () =>{
        return `${student.name} (${student.school.sName})`
    }
}
student.getData()
console.log(student.getData());

console.log(student);
console.log(student.details); //Undefined
console.log(student.class);
console.log(student.classDays[0]);
console.log(student.classDays[student.classDays.length - 1]);
// console.log(student.details.school); //error 

student.rollNumber = 43
console.log(student);
student.classDays.push('sunday')
student.school.location = 'karachi'

delete student.school
console.log(student);

console.log("SMIT" in student); //value in object


console.log(window);
console.log(this);
function Name(){ //seperate scope
console.log(this); //undefined = global object(window)
}
Name() //direct

// this substitution 
var obj = {
    name : "saira",
    getName : function (){
        return this.name
        // console.log(this);
    }
}
console.log(obj.getName);

obj.getName() //(object k through object)
//object.functioncall...
var a = obj.getName 
a(); //global scope/object (undefined) //window

// element ko target kerne k liye


// mode 2 types Strick Mode / Non-Strick Mode
'use strict' //undefined

// Object Constructor

// function Student() { //first letter capital
//     this.name ="Saira",
//     this.email = "sairabatool12@gmail.com"
// }
// console.log(new Student);

function Student1(name,email){
    this.name = name,
    this.email = email
}
console.log(new Student1("saira" , "saira23@gmail.com"));


var cars = [
    {
        name: "Saira",
        modal: "civics",
        year: 2025,
        company: {
            name: "honda"
        }
    }, {
        name: "Saira",
        modal: "civics",
        year: 2025,
        company: {
            name: "honda"
        }
    }
]
// student.phone = 2353454
// console.log(student);

// delete student.name // delete object from property name

// var functionIs = function(){
// }
var obj = {
    name: "Ali",
    object: function () {
        // console.log(this);
        return `Mr ${this.name}`
    }
}

//return output 
console.log(obj.object());



obj.object() //=>object aye ga
// object.functioncall
var a = obj.object
a() //=>window because this is undefined js khud global object daal deta hai

//point to be notice
var box = document.getElementById("box")
box.innerHTML = obj.name

// "property" in object 
console.log("name" in obj);


// constructor aik bar property bata do (this,new)
function Student() { //first letter capital
    this.name = "Saira",
        this.email = "sairabatool23@gmail.com",
        this.phone = 233
}
console.log(new Student());

function Information(fname, lname) {
    this.fname = fname,
        this.lname = lname
}
// console.log(new Information("saira" , "batool"));
var myarr = [
    new Information("Saira", "tajamul66@gmail.com"),
    new Information("sajida", 788),
    new Information("Saira", "tajamul66@gmail.com"),
    new Information("sajida", 788)
]
console.log(myarr);

// factory function new object banyen gye her dafa
function student(name, email) {
    return {
        name: name,
        email: email
    }
}
console.log(student("ghous", "ghous@gmail.com"));
console.log(student("ghous", "ghous@gmail.com"));

// method in constructor
function Student() { //first letter capital
    this.name = "Saira",
        this.email = "sairabatool23@gmail.com",
        this.phone = 233,
        this.getDetail = function () {
            return this.name
        }
}
var myarr = [
    new Information("Saira", "tajamul66@gmail.com"),
    new Information("sajida", 788),
    new Information("Saira", "tajamul66@gmail.com"),
    new Information("sajida", 788)
]
// console.log(new Student());
// console.log(myarr);
// is mai thori mistake hai yeh function sb property k sath alag alag banye ga 

// Prototype 
function Student() { //first letter capital
    this.name = "Saira",
        this.email = "sairabatool23@gmail.com",
        this.phone = 233
}
//function.prototype.method //js generated gray walye
Student.prototype.getDetail = function () { //share hoga
    return this.name
}
var company = prompt("company") //honda
var cars = {
    honda: {
        civic: {
            name: "honda",
            model: 355,
            colors: ["black"]
        }
    }
}

console.log(cars[company][model]);

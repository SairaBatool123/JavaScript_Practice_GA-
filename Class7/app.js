if ("a" === "a") {
    console.log("Saira") //Saira
}

// falsy value 
false
""
null
undefined
0
NaN

var userName = prompt("Enter Your Name:");
//string "" 
if (userName) {
    console.log(userName);
} else {
    alert("Please Again Enter Your Name:");
}

var softwareEngineer = prompt("Please Enter Your level");

if (softwareEngineer === "Senior Software Engineer") {
    console.log("90000");
} else if (softwareEngineer === "Junior Software Engineer") {
    console.log("60000");
} else {
    console.log("50000");
}




//10 testing set of condition

var skill = prompt("Enter your skills");
var exp = prompt("Enter Your exp");
var city = prompt("Enter your city");
var salary = prompt("Enter your salary");

// if(skill === "javascript" && exp > 2){
//     console.log("Hired")
// }
if ((skill === "javascript" || exp > 2) && city == "Karachi") {
    console.log("Hired")
}




//11 if statements nested
var skill = prompt("Enter your skills");
var exp = prompt("Enter Your exp");
var city = prompt("Enter your city");
var salary = prompt("Enter your salary");

if ((skill === "javascript" || exp > 2) && city == "Karachi") {

    if (softwareEngineer === "Senior Software Engineer") {
        console.log("90000");
    } else if (softwareEngineer === "Junior Software Engineer") {
        console.log("60000");
    } else {
        console.log("50000");
    }
    console.log("Hired")
}


//12 Array (object)
var arr = []; //empty array

var arr = ["saira", "sajida", "saira", "sajida", "saira", "sajida", "saira", "sajida",];
console.log(arr);
//get indexing start from 0
console.log(arr[3]); //sajida
// count not indexing it is a number of count 
console.log(arr.length);
// adding another in array 
arr[4] = "shafqat"

console.log(arr[5]);

var arr = ["saira", "sajida", "saira", "shahzad", "ali"];

// var update ker diya
arr = "saira"
// string mai bhi index hoti hai 
console.log(arr[3]); //r


var arr = ["saira", "sajida", "saira", "shahzad", "ali"];
arr.pop(); //remove always in last
arr.push(); //add always in last

arr.unshift("saira"); //add always in first
arr.shift("saira"); //remove always in first

arr.push("tajamul"); //index nhi batana perta
arr.push("tajamul", "saira"); //add one or more
console.log(arr);


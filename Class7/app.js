// Chap # 11 Comparison operator (use with if statement)

if ("a" === "a") { //true
    console.log("Saira") //Saira
}

"a" !== "a" //false
//yeh na ho baki sare bachye ho yeh example ho sakti hai
// operators
// > , < , >= , <= 

if(10>5){
    console.log("Saira") //Saira
}

// falsy value 6 only for reduce a code
false
""
null
undefined
0
NaN

var userName = prompt("Enter Your Name:");
//string "" 
//falsy value k ilawah baki sari value true hi hoti hai
// OR in if (userName === " ") OR if (userName !== " " //Reverse)
if (userName) {
    console.log(userName);
} else {
    alert("Please Again Enter Your Name:");
}

var softwareEngineer = prompt("Please Enter Your level");
//if by-default independent 
if (softwareEngineer === "Senior Software Engineer") {
    console.log("90000");
} else if (softwareEngineer === "Junior Software Engineer") {
    console.log("60000");
} else {
    console.log("50000");
}

//Chapter # 13 testing set of condition (OR / AND) using for comparison multiple comparision

var skill = prompt("Enter your skills");
var exp = +prompt("Enter Your exp");
var city = prompt("Enter your city");

//first wala hi false ho to agye wale check karye ga hi nhi 
if(skill === "javascript" && exp > 2){
    console.log("Hired")
}
// OR 
if ((skill === "javascript" || exp > 2) && city == "Karachi") {
    console.log("Hired")
}

//Chapter # 14 if statements nested
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

//Chapter # 15 (Array= datatype object) python (list)
var arr = []; //empty array intialize

var arr = ["saira", "sajida", "saira", "sajida", "saira", "sajida", "saira", "sajida",]
arr[8] = "kamran" //add this on 8 index
console.log(arr);
//get indexing start from 0
console.log(arr[3]); //sajida
//not indexing it is a (number of count) 
console.log(arr.length);
// adding another in array  with the help of indexing
arr[9] = "shafqat" //undefined

var arr;
console.log(arr[5]); //get[] 1 error 5 index 2 error

var arr = ["saira", "sajida", "saira", "shahzad", "ali"];
// var update ker diya or os ka address nhi bayata
arr = "saira"
console.log(arr); //saira
arr = "saira"
// string mai bhi index hoti hai 
console.log(arr[3]); //r

// ARRAY METHOD  "keyword" pop..
var arr = ["saira", "sajida", "saira", "shahzad", "ali"];

arr.pop(); //2 time call kerwana
arr.pop(); //remove always in last
arr.push("sana"); //add always in last

arr.unshift("saira"); //add always in first
arr.shift(); //remove always in first

arr.push("tajamul"); //index nhi batana perta
arr.push("tajamul", "saira"); //add one or more
console.log(arr);


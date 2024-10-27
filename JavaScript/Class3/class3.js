// chapter # 8
// Concatenating test strings (+ only)

var fristName = "Saira"
var lastName = "Batool"

console.log(fristName + " " + lastName)


var num1 = "2";
var num2 = "2";
console.log(num1 + num2)
// 22

var num1 = 2;
var num2 = "2";
console.log(num1 + num2)
// 22


var num1 = 2;
var num2 = "2";

console.log(num1 + num2 + 2) //left to right
// 222


var num1 = 2;
var num2 = "2";

console.log(2 + num1 + num2)
// 42


// javascript top to bottom left to right


// chapter # 9
// Prompts (use for taking input from user return respone gives it and also gives string value)

console.log(prompt()); //Saira

var userName = prompt();
console.log(userName); //Saira

var num1 = prompt(); //+prompt(); //10 //abc
var num2 = prompt(); //+prompt(); //10 //abcd
// when we want to return in a number so you have two option +prompt() OR: num1 = Number(num1);

console.log(num1 + num2) //1010 because this take string as an input //20 //NaN because we write there + thats take a number only 

var name = prompt("Enter Your name", "Saira"); //label , default value

var numberOfCats = prompt("How many cats?");
var tooManyCats = numberOfCats + 1;
alert(tooManyCats) //41

// Chapter # 10
// if Satatement
// inculde in it comparision operator
// === Value and Type
// == Value
// !== true = false false = true + (Value and Type)
// != true = false false = true + (Value)
// e.g; "123" !== "123" //false 
//"123" !== "1234" //true
if (true) {
    console.log("Karachi is my  City")
}

var city = prompt("Enter Your City");

if (city == "karachi") { //true
    console.log("City Of Light")
}

var age = +prompt("Enter Your Age: ");

if (age >= 20) {
    console.log("You Are Eligible To Attend a Class");
} else {
    console.log("Not eligible");
}

var age = +prompt("Enter Your Age: ");

if (age >= 20) {
    console.log("You Are Eligible To Attend a Class");
}
else if (age > 15) {
    console.log("OK You can Also Apply For That")
}
else {
    console.log("You Are Not Eligible To Attend a Class");
}


var num1 = +prompt("First Number: ");
var num2 = +prompt("Second Number: ");

var operator = prompt("Enter Any Operator: + , - , * , / ");

var result = (num1 + num2); //+ , - , * , / 
alert(result);

var score=0;
var x=prompt("enter where you live?")
var correctAnswer = "Vatican";
if (x === correctAnswer) {
    score++
    console.log(score); //1
    userIQ = "genius";
    alert("Correct!");
}



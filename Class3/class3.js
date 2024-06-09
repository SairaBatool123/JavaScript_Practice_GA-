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

console.log(2 + num1 + num2 )
// 42


// javascript top to bottom left to right


// chapter # 9
// Prompts (use for taking input from user)

console.log(prompt());

var userName = prompt();
console.log(userName);

//

var num1 = prompt();
var num1 = prompt();
// when we want to return in a number so you have two option +prompt() OR: num1 = Number(num1);

console.log(num1 + num2) //1010 because this take string as an input

// Chapter # 10
// if Satatement

var city = prompt("Enter Your City");

if (city == "karachi") {
    console.log("City Of Light")
}


var age = +prompt("Enter Your Age: ");

if(age >= 20){
    console.log("You Are Eligible To Attend a Class");
}
else if(age > 15 ){
    console.log("OK You can Also Apply For That")
}
else{
    console.log("You Are Not Eligible To Attend a Class");
}


// var num1 = +prompt("First Number: ");
// var num2 = +prompt("Second Number: ");

// var operator = prompt("Enter Any Operator: + , - , * , / ");

// var result = (num1 + num2);
// alert(result);

var currentNumber = 10;
var myNumber = "20";

console.log(currentNumber + 10 + Number(myNumber)); //4
// console.log("Type of: ", typeof myNumber) // Type of: String

var score = 0;
console.log("score: " ++score ); //0

console.log("score: " score); //1

console.log("score: " score + 1); //2

var name = prompt("Enter Your Name: ") //SANA  
console.log(name.toLowerCase()) //sana
// sana === SANA
if(name.toLowerCase() === "sana"){
    alert("YOU ARE RIGHT")
}



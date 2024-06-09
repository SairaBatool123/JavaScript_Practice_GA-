console.log("StudentName" , fname) //Not define (error)

var fname;
console.log("StudentName" , fname) //undefined (type)

var currentNumber = 10;
var myNumber = "20";

console.log(currentNumber + 10 + Number(myNumber)); //40
// Number()
// console.log("Type of: ", typeof myNumber) // Type of: String

var score = 0;
console.log("score: " ++score); //0

console.log("score: " score); //1

console.log("score: " score + 1); //2

var name = prompt("Enter Your Name: ") //SANA  
console.log(name.toLowerCase()) //sana
// sana === SANA
if (name.toLowerCase() === "sana") {
    alert("YOU ARE RIGHT")
}



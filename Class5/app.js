console.log("StudentName" , fname) //Not define (error)

var fname;
console.log("StudentName" , fname) //undefined (type)

var currentNumber = 10;
var myNumber = "20";

console.log(currentNumber + 10 + Number(myNumber)); //40
// Number()
// console.log("Type of: ", typeof myNumber) // Type of: String

var num = 1;
var newNum = num++;
alert(newNum)
alert(num)

var score = 0;
console.log("score++: ", score++); //0
console.log("score: " ,score); //1
console.log("--score: " ,--score); //0
console.log("score: ", score + 1); //score: 1

var nameIs = prompt("Enter Your Name: ") //SANA,sana,Sana (it converted into sana)  
console.log(nameIs.toLowerCase()) //sana this is a just for written form in console
//SANA(converted in lowercase) === sana 
if (nameIs.toLowerCase() === "sana") { //toUpperCase
    alert("YOU ARE RIGHT");
}



// Chapter # 4
// Variable Names Legal and Illegal

// don't start with number use in between and last - underscore and keyword/method is not allowed 

document.write("<h1>Saira</h1>")
// ( object window/document )temporary
// . for out from document 
// keyword/object (methods/values)


// Chapter # 5
// Math expressions: Familiar operators

// All mathematical rule is apply here +,-,*,/

alert("2" * 2)
// 4

alert("10" / 2)
// 5


alert(2+2)
// 4
alert("2"+"2")
// 22 (concatinat)
alert("2"+2)
// 22 (concatinat)
alert(2+"2")
//22 (concatinat)
alert("2" + 2 + 2)
// 222 (left to right)
alert(2 + 2 + "2")
//42


// Chapter # 6
// Math expressions: Unfamiliar operators

var num1 = 6;
alert(num1) //6

// num1 = num1 + 1
// num1 = num1 + 5
// or
num1++;

alert(num1) //7


number = 10
alert(number); //10
number = "number + 5"; //number + 5
alert(number);
number++;
// post increment
alert(number);
//NaN it is a string

var num2 = 10
alert(num2); //10
num2 = "num2 + 5";
alert(num2); //num2 + 5
num2--;
// post decremenant
alert(num2);
//NaN it is a string

var a = 2; //3 //2
var b = 3; //2 //3

var num = (a++ + --b) - b++ - --a * a++;
// (2 + 2)  - 2  -2  *  2  = -2
// ++post just print it the same and after that increment 

alert(num)


var a=2; //3 //2 //3
var b=3; //2 //3

console.log(a++ , --b , b++ , --a , a++); //2 2 2 2 2
//js is ko kese lye raha hai we check like this


// Chapter # 7
// Math expressions: Eliminating ambiguity (confusion)
console.log(((2 + 2)* 2) -2 * 2)  //4
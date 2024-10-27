// var myName = "saira"
// var result = myName.length
// console.log(result)

// var greeting = "Hello World"
// console.log(greeting.length);

// slice string/array ka method hai
// var greeting = "Hello World"
// console.log(str.slice(0,6))


// var userInput = prompt("Enter any month");
// if(result = userInput.length > 3){
//     result = userInput.slice(0,3);
//     console.log(result)
// }

// class # 13
var myName = "saira sana"
console.log(myName.indexOf("batool"))
// indexOf preferance se chalta hai fisrt wala
console.log(myName.indexOf("s"))
console.log(myName.lastIndexOf("a"))
// wo value jo is mai ho hi na to answer -1 means value hai hi nhi 

var array = ["saira", "sana", "sajida"]
console.log(array.indexOf("saira")) //==> 0

// index per ki para hai 
var scoreName = "saira"
// console.log(scoreName.slice(0,1)) //==>s
// console.log(scoreName.charAt(0))
// console.log(scoreName[4])
// console.log(scoreName.replace("saira" , "sajida")) //==>sajida

// var input = "sana saira sajida sawera saira"
// console.log(input.replaceAll("saira", "sajida")) //==>sajida

// // 3rd element change 
// var str = "Saylani SMIT SMIT Sas SMIT ada SMIT"
// var word = "SMIT"
// var replace = "Saylani"
// var khali = ""
// var count = 0
// for (var i = 0; i < str.length; i++) {
//     var find = str.slice(i, i + word.length)
//     if (find === word) {
//         count++;
//         if (count === 3) {
//             str = str.slice(0, i) + replace + str.slice(i + word.length)
//         }
//     }
// }
// console.log(str)

// var scoreAvg = 3.5
// var numberOfStar = Math.round(scoreAvg)
// console.log(numberOfStar)
// .5 greater to greater .5 less chota no round off hoga

// thori bhi ziyadah ho 10.01 to greater round
var number = 9.1
result = Math.ceil(number)
console.log(result)


// var number = 9.01
// result = Math.floor(number)
// console.log(result)
// OR
console.log(Math.floor(number));

// usage unique id head tail dice
// range 0 se 1 decimal value 16
console.log(Math.random())
console.log(Math.random())
console.log(Math.random())

// practice on console and you see that there is no 0 value occure
// Math.ceil(Math.random() * 2) //head tail
// Math.ceil(Math.random() * 6) //dice
var result = Math.ceil(Math.random() * 6)
console.log(result)
var result = Math.ceil(Math.random() * 6)
console.log(result)
var result = Math.ceil(Math.random() * 6)
console.log(result)

console.log(parseInt("3.2344")) //==>string convert into number/with no deci point Or another (Number and +)
console.log(+("5.3442"))
console.log(Number("5.3442")) //5.3442
console.log(parseFloat("3.244")) //==>3.244

// convert number into string 
var numberIs = 23456
console.log(numberIs.toString())
// Or 
console.log(numberIs.toString())

// Round Method + number of deci/point k baad in (2)
var num = 10.3455
// console.log(num.toFixed());
// // Or 
// var num = 10.3455
// console.log(num.toFixed(1));
// or 
// console.log(num.toFixed(10)); //10.3455000000


// user input and make a game
// var player1 = prompt("Enter head or tail")
// var player2;
// game = Math.random() * 2
// if(game === 1){
//     console.log("Player One Is won")
// }else{
//     console.log("Player Two Is won")
// }


//password generator
// var input = +prompt("Enter Your Range of Password");
// var nums = "#$99006645"
// var result = nums(Math.ceil(Math.random()))

// if (input === 10) {
//     console.log(result)
// }



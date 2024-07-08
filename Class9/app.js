//Palindromes Words
var word = prompt("Enter Any Word");
// 1
for (var i = 0; i < word.length; i++) {
    console.log(word[i]) // string saira in every index from 0 to 4 
    // console.log(i)  // 0-4 index
}
// 2
for (var i = word.length - 1; i >= 0; i--) {
    console.log(word[i]) //arias in every index
}
// 3
var reverse = "";
for (var i = word.length - 1; i >= 0; i--) {
    reverse += word[i]
    //var declared upon
    //   console.log(reverse) 
    //   i
    //   il 
    //   ila
}
// console.log(reverse) //anas 
if (word === reverse) {
    console.log("It is a palindrome")
} else {
    console.log("It is not a palindrome")
}
// 4
// for (var i = 1; i <= 10; i++) {
//     console.log(i)
// }
// for (var i = 10; i >= 1; i--) {
//     console.log(i)
// }
// 5
var arr = [11, 23, 34, 35, 12, 77, 10];
var min = arr[0]

for (var i = 0; i < arr.length; i++) {
    if (min > arr[i]) {
        min = arr[i]
    }
}
console.log(min); //10 max < arr[i]

// dono indexes ko minus kerwana (miising numbers)
// aik ka difference +1 +2 
// 6
var arr = [11, 12, 14, 15, 16, 17, 19, 20]; //12-11 aik hi time pr agye or pichye wala chahiye
for (var i = 0; i < arr.length; i++) {
    if (arr[i + 1] - arr[i] === 2) { //aik k liye 14-12
        console.log(arr[i] + 1)
    }
}

var arr = [50, 51, 52, 55, 56, 57, 58, 59]
for (var i = 0; i < arr.length; i++) {
   var diff = arr[i + 1] - arr[i];
    if (diff > 1) {
        for (var j = 1; j < diff; j++) {
            console.log(arr[i] + j) //53 //54
        }
    }
}

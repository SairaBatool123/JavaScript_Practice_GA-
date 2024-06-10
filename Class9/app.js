//Palindromes Words
var word = prompt("Enter Any Word");

for (var i = 0; i < word.length; i++) {
    console.log(word[i]) // string saira in every index from 0 to 4 
    // console.log(i)  // 0-4 index
}

for (var i = word.length - 1; i >= 0; i--) {
    console.log(word[i]) //arias in every index
}

var reverse = "";
for (var i = word.length - 1; i >= 0; i--) {
    reverse += word[i]
    //var declared upon
    //   console.log(reverse) 
    //   i
    //   il 
    //   ila
}
console.log(reverse) //anas 

for (var i = 1; i <= 10; i++) {
    console.log(i)
}
for (var i = 10; i >= 1; i--) {
    console.log(i)
}
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
var arr = [11, 12, 14, 15, 16, 17, 19, 20];

for (var i = 0; i < arr.length; i++) {
    var diff = arr[i + 1] - arr[i];
    if (diff > 1) {
        for (var j = 1; j < diff; j++) {
            console.log(arr[i] + j)
        }
    }
}

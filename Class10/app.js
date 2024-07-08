for (var i = 0; i < 5; i++) {
    console.log(i)
}

var tableOf = 3;
// var incre = 1;

for (var i = 1; i <= 10; i++) {
    console.log(tableOf + "x" + i + "=" + tableOf * i) //tableOf*incre
}

var Reversename = "Saira";
for (i = 4; i >= 0; i--) {
    console.log(Reversename[i])
}

var Reversename = "Saira";
for (i = 0; i < 5; i++) {
    console.log(Reversename[i])
}

// CLASS # 10
str += "saylani"

var str = "SMIT";
for (var i = 0; i < str.length; i++) {
    console.log("true")
}

// one difference
var arr = [11, 13];
for (var i = 0; i > arr.length; i++) {
    if (arr[i + 1] - arr[i] > 1) { //13-11 diff=2 > 1 ==> true
        console.log(arr[i] + 1)
    }
}

// two or more differernce
var arr = [11, 13, 14, 15, 20];
for (var i = 0; i > arr.length; i++) {
    if (arr[i + 1] - arr[i] > 1) { //13-11 diff=2 > 1 ==> true
        for (var j = 1; j < arr[i + 1] - arr[i]; j++) {
            console.log(arr[i] + j)
        }
    }
}

var arr = [11, 13, 14, 15, 20];
var missing= []
for (var i = 0; i > arr.length; i++) {
    if (arr[i + 1] - arr[i] > 1) { //13-11 diff=2 > 1 ==> true
        for (var j = 1; j < arr[i + 1] - arr[i]; j++) {
            console.log(arr[i] + j)
        }
    }
}
console.log(arr)
console.log(missing)

// Nested loop
var arr = [11, 13, 14, 15, 20];
for (var i = 0; i > arr.length; i++) {
    var diff=arr[i + 1] - arr[i]
    if (diff > 1) { //13-11 diff=2 > 1 ==> true
        for (var j = 1; j < diff; j++) {
            arr.splice( i+j , 0 , arr[i] + j)
        }
    }
}
console.log(arr)
//variable 
//functional Scope (same name se variable bana saktyen hain no error)
var a = "saira";
var a = "sajida";

//let , const
// (cannot redeclare block scope variable)
// let a = "saira";
// let a = "saira"; //error always decleared 

// if(true){
//     let a = "sana"
// }
// console.log(a); //error

//Update:
let ab = "saira";
ab = "sajida";  //sajida

// const a = "saira";
// a = "sajida";  //error

// array => save by reference not value
const arr = []
arr[0] = 1
console.log(arr);

const obj = {}
obj.name = "saira"
console.log(obj);

const b = {}
a = { name: "Ahmed" }
console.log(a); //error obj k  ander obj not allow (replace)

// console.log(p); //error not defined aisi cheez jo define hi na ho 

// Q# hoisting allow in var
// console.log(c);
// var c = "Ghous";

var c; //behind the sence
console.log(c);
c = "Ghous"; //undefined

// synchronous(squential) AND asynchronous(parallel)
for (var i = 0; i < 5; i++) {
    setTimeout(function () {
        console.log(i);
    }, 3000)
} //5=>5

for (let i = 0; i < 5; i++) {
    setTimeout(function () {
        console.log(i);
    }, 3000)
} //0 to 4

// asynchronous 
setTimeout(function () {
    console.log("Saira");
}, 1000)
console.log("Batool");

// Single-Thread => One Work AT a Time
//(Web API => fetch(),SetTimeOut() )microtask,macrotask queue => Call Stack // Event Loop 
// https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpuMfkaW1XRyFLHqjp95tm_GjpyfS1wLkO-g&s

// differnce bw let,var const img.jpg

//Higher Order Array Methods:
const arr1 = [2, 3, 5, 6, 2]
const newArr = arr1.map((element, index, arr1) => {
    return element * 2;
})
//Clouser:
function abc() {
    //window
    //abc scope
    var a = 4;

    function xyz() {
        //window
        //abc scope
        //xyz scope
        function foo() {
            //window
            //abc scope
            //xyz scope
            //foo scope
        }
    }
    xyz();
}
abc();

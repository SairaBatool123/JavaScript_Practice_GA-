// ----------------- CLASS # 1 ---------------
// 1. VARIABLE SCOPING
var firstName = "Saira"
{
var firstName = "Batool"
console.log(firstName);
} //BLOCK SCOPE
console.log(firstName);
//FUNCTION SCOPE (let,var,const)
function foo(){
    let abc = "saira";
}
// console.log(abc);
// REDECLEAR (var)
var fname = "sana"
var fname = "sara"
// REASSIGN (var , let)
var fname = "sana"
fname = "sara"
// HOISTING 
console.log(bc);
var bc = "sana"

// 2. CLOSURE
function init() {
    var name = "Mozilla"; // name is a local variable created by init
    function displayName() {
        // displayName() is the inner function, that forms a closure
        console.log(name); // use variable declared in the parent function
    }
    displayName();
}
init();

// 3. TEMPLATE LITERALS
// let name = saira
let merge = `my name is ${name}
and im very happy today`

// 4. DESTRUCTRING
let myArray = [1,3,4,5,6] 
let [d, ,  ,...rest]= myArray
console.log(d ,...rest);

// 5. DEFUALT PARAMETERS
function foo(a=4,b=4){
    return a+b
}
console.log(foo(10,10)); //foo()

// 6. REST PARAMETERS (BACHA HOWA)
function fooIs(a,b,...rest){
//   console.log(a,b,...rest); //arguments
// console.log(a,b,rest); //array
console.log(a);
console.log(b);
console.log(rest);
}

fooIs(10,10,4,5,6,7,8,9)

// 7. SPREAD PARAMETERS 
const originalArr1 = [1,2,3]
console.log(...originalArr1);

const originalArr = [1,2,3]
const copiedArr = [...originalArr]
console.log(copiedArr);

const dummyArr1 = [1,3,4]
const dummyArr2 = [6,8,9]
const mergeArr = [...dummyArr1, ...dummyArr2]
console.log(mergeArr);

const number = [1,2,3,4,5]
sumIs(...number)
function sumIs(a,b,c,d,e){
    console.log(a+b+c+d+e);
    
}
// 8. ARROW FUNCTION 
// const sayHi = (o)=>{
//     console.log('Hi EveryOne');
// }
// sayHi(o) 
const sayHi = (o)=>console.log('Hi EveryOne');
sayHi(o) 


// ----------------- CLASS # 2 ---------------
const arr = ['saira', 'sara']
arr[0] = 'wasif' // inner element changable 
console.log(arr);

const obj1 ={
    fname:'sana',
    lname:'zehra'
}
obj1.fname = 'saira'
console.log(obj1);

// ... // function(rest operator)

// ... // object, array, array of object (spread operator)=>copy

let arr1 = [1,2,3,4,5]
let arr2 = [6,7,8,9,10]
let arr3 = [...arr1,...arr2]
console.log(arr3);

let array = [1,2,3,4,5,...arr2]
console.log(array);

let object = {
    fisrt : 6,
    second: 7,
    last : 8
}

let obj2 = {
    ...object,
    end:9
}
console.log(obj2);

// HOISTING ON FUNCTION 
abc() //function ko pora chala dye ga // Hello WOrld
// NORMAL AND TRADITIONAL FUNCTION 
function abc(){
    console.log('Hello WOrld');
    
}

// FUNCTION EXPRESSION
let foo1 = function(){
    console.log('sadat');
    
}
foo1()

// ARROW FUNCTION 
let abf = (a,b)=>{ // if one parameter no need to add () directly write a=>{}
    console.log(a,b);
    
}
abc('saira','batool')

// OR : 

let sum = a => a
console.log(sum(2));

let some = (a,b,c) => a+b-c
console.log(some(1,2,5)); //-2

// ternary operator 
var a = "5"
// if(a===5){
//     console.log('han ok');
    
// }
// else{
//     console.log('not ok');
    
// }
// OR:
// ? check : else 
var b = (a === 5 ? 'han ok' : 'niklo')
console.log(b);


// let onBulb = 'ON'
// let offBulb = 'OFF'

function bulbAction(){
    let img1 = `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrKWo3ok1UfnNAxWAMupU_td3J2wIOcVZvdA&s`
let img2 = `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4f8jekx0C6HSdWYpAQDN5C4PW_TQlOvWmGA&s`

let check = (img1 == 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrKWo3ok1UfnNAxWAMupU_td3J2wIOcVZvdA&s' ? `<div>${img1}</div>` :`<div>${img2}</div>` );
let veri = document.getElementById('check').innerHTML===check
}

let button = document.getElementById('bulb');

console.log(button);
bulbAction()








function obj(a,b,...rest){
    // var a = 0 ;
    for (let key in rest) {
    var a = rest[key]
    console.log(a);
    
    }
    console.log(a+b);
    
}
obj(1,2,3,4,5,2)

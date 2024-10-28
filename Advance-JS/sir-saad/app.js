// ----------------- ADVANCED JAVASCRIPT ---------------
// 1. VARIABLE SCOPING
var firstName = "Saira"
{
    var firstName = "Batool"
    console.log(firstName);
} //BLOCK SCOPE
console.log(firstName);
//FUNCTION SCOPE (let,var,const)
let abcdee = "saira";
function foo5() {
    console.log(abcdee);
}
foo5(); //saira

function foo3() {
    let abcde = "saira";
}
// console.log(abcde);
foo3(); //not defined

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
let names = "saira"
let merge = `my name is ${names} \n
and im very happy today`
console.log(merge);

// 4. DESTRUCTRING
let myArray = [1, 3, 4, 5, 6]
let [d, , , ...rest] = myArray
console.log(d, ...rest);

let student = {
    name: "sana",
    email: "saira455@gmail.com",
    classDetail: {
        time: "9-11"
    }
}
let { name, email, classDetail } = student;
console.log(name, email, classDetail);
// OR 
let { time } = classDetail; //time: classTime(rename)
console.log(name, email, time); //classTime

// 5. DEFUALT PARAMETERS
function foo(a = 4, b = 4) {
    return a + b
}
console.log(foo(10, 10)); //foo()

// reference of array and object are changable 
const arr = ['saira', 'sara']
arr[0] = 'wasif' // inner element changable 
console.log(arr);

const obj1 = {
    fname: 'sana',
    lname: 'zehra'
}
obj1.fname = 'saira'
console.log(obj1);

// 6. REST PARAMETERS (BACHA HOWA)
// ... rest operator // function(rest operator)
function fooIs(a, b, ...rest) {
    console.log(a, b, ...rest); //all arguments availiable here
    console.log(a, b, rest); //10,10,array
    // console.log(a);
    // console.log(b);
    // console.log(rest); //array
}
fooIs(10, 10, 4, 5, 6, 7, 8, 9)

let object = {
    fisrt: 6,
    second: 7,
    last: 8
}

let obj2 = {
    ...object,
    end: 9
}
console.log(obj2);


// 7. SPREAD PARAMETERS 
// ... // object, array, array of object (spread operator)=>copy,merge, transform
const originalArr1 = [1, 2, 3]
console.log(...originalArr1);

const originalArr = [1, 2, 3]
const copiedArr = [...originalArr]
console.log(copiedArr);

const dummyArr1 = [1, 3, 4]
const dummyArr2 = [6, 8, 9]
const mergeArr = [...dummyArr1, ...dummyArr2]
console.log(mergeArr);

function sumIs(a, b, c, d, e) {
    console.log(a + b + c + d + e);

}
const number = [1, 2, 3, 4, 5]
sumIs(...number)

function obj6(a, b, ...rest) {
    // var a = 0 ;
    for (let key in rest) {
        var a = rest[key]
        console.log(a);

    }
    console.log(a + b);

}
obj6(1, 2, 3, 4, 5, 2)

// 8. ARROW FUNCTION 
let abf = (a, b) => { // if one parameter no need to add () directly write a=>{}
    console.log(a, b);

}
abc('saira', 'batool')
// OR : 
let sum = a => a
console.log(sum(2));

let some = (a, b, c) => a + b - c
console.log(some(1, 2, 5)); //-2

// HOISTING ON FUNCTION 
abc() //function ko pora chala dye ga // Hello WOrld

// NORMAL AND TRADITIONAL FUNCTION 
function abc() {
    console.log('Hello WOrld');

}
// FUNCTION EXPRESSION
let foo1 = function () {
    console.log('sadat');

}
foo1()

// 9. ENHANCED OBJECT LITERALS
let uName = "sana";
let age = 2;
let gender = "female";

let objectEqual = { uName, age }
console.log(objectEqual);

// VARIABLE DECLARATION
var Yname = "Lilly";
var color = "White";
var Yage = 3;
// FUNCTION DECLARATION  
// using "this" keyword to access the object keys. 
var barkWithName = function () {
    console.log('Woof Woof!!, I am '
        + this.Yname + ' and I am a '
        + this.Yage + ' years old, '
        + this.color + ' coloured dog.Woof Woof!!');
}

//  New syntax without function keyword 
const driver2 = {
    name: "Jane",
    speed: 60,
    car: "McLaren",
    speedUp(speedup) {  //speedUp: function(speedup){ 
        this.speed = this.speed + speedup;
        console.log("new speed = " + this.speed)
    }
}

// 10. ITERATOR
const nameIs = ["saira", "bushra", "shabana", "shapater"]

let iterator = nameIs[Symbol.iterator]()
console.log(iterator.next());
console.log(iterator.next());

// 11. GENERATOR
function* generator() {
    yield 1;
    yield 2;
    yield 3;
}
const gen = generator();
console.log(gen.next().value); // 1
console.log(gen.next().value); // 2

// 12. FOR OF LOOP
const numbers = [1,2,3,4]
for(let num  of numbers){
    console.log(num);

}
const obj = {
    userId :78,
    userName:"laiba",
    phoneNum : 9823982463,
}
console.log(obj["userId"]);
let keys = Object.keys(obj)

for(let key of keys){
    console.log(obj[key]);

}
for(let key in obj){
    console.log(obj[key]);

}

// 13.  MODULES
// import { namme, agee } from "./person.js";
const namme = "Jesse";
const agee = 40;

// export {namme, agee};

// 14. HIGHER ORDER FUNCTION 
// function callBackFunction() {
//     console.log("I am a callBackFunction");
// }
// function higherOrderFunction() {
//     console.log("I am a higherOrderFunction");

// }

// 15. CALL BACK FUNCTION 
function aFunction() {
    console.log("hi");

}
aFunction(() => {
    console.log("I am a callBackFunction");

})

// 16. PROMISES


// 17. EXPONENTIATION OPERATOR
console.log(2 ** 4); //16
console.log(2 ** 3 ** 2); //512
console.log(16 ** -2); //0.00390625

// 18. CLASSES
class Animal {
    constructor(name, age, food) {
        this.name = name
        this.age = age
        this.food = food
    }
    eat() {
        console.log(`${this.name} eats ${this.food}`);
    }
    isCute() {
        if (this.age < 2) {
            console.log(`${this.name} is cute`)
        }
    }
}
let cat = new Animal("cat", 2, "fish")
cat.eat()
cat.isCute()
console.log(cat);

// 19. TERNARY OPERATOR 
var a = "5"
// ? check : else 
var b = (a === 5 ? 'han ok' : 'niklo')
console.log(b);
// OR 
let uAge = 15;
let myAge = uAge > 15 ? "ok Good" : uAge == 15 ? "not Bad" : "try again"
console.log(myAge);

// 20. OPTIONAL CHANNING
let objAre = {
    name: "sara",
    age: 5
}
console.log(objAre.name.class); //undefined 
console.log(name?.age?.class);

// 21. ARRAY METHODS

// MAP 
//map function change the state of the reference array
const even = [2,4,6,8,10]
const odd = even.map(function(val){
    return val - 1 // on same index
});
console.log(odd);
// OR: const odd = even.map(val => val-1);

// FILTER 
const num = [1,2,3,4,6,8,9,7];
const final = num.filter(val=> val%2==0 )
console.log(final);
even.forEach(val=>console.log(val));



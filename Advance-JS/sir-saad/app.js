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
console.log(abc);
// REDECLEAR (var)
var fname = "sana"
var fname = "sara"
// REASSIGN (var , let)
var fname = "sana"
fname = "sara"
// HOISTING 
console.log(bc);
var bc = "sana"

// -----------------TEMPLATE LITERALS---------
let name = saira
let merge = `my name is ${name}
and im very happy today`

//------------------DEFUALT PARAMETERS----------------
function foo(a=4,b=4){
    return a+b
}
console.log(foo(10,10)); //foo()

//------------------REST PARAMETERS (BACHA HOWA)----------------
function foo(a,b,...rest){
//   console.log(a,b,...rest); //arguments
// console.log(a,b,rest); //arrray
let num = 0 ;
for (let key in rest) {
     num  += rest[key];
     console.log(rest[key]);
     
}
console.log(a+b+num);
//   console.log(a,b,...rest);
}

foo(10,10,4,5,6,7,8,9)

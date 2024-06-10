// ARRAY METHOD (SPLICE)  
pets.splice(2, 2, "pig", "duck") //target index or agye kitne ko remove kerna hai 
//array method that do every work like,add remve/delete and replace in start end and center

// array  (index , wo khud os k agye wala remove , baki yeh add ker do)


// Delete 
var students = ["saira", " sajida", " ali"]
students.splice(1, 1) // target index then target index ko mila ker remove kerna

var students = ["saira", " sajida", " ali"]
students.splice(1, 2); //saira
console.log(students[1]); //undefined
// console.log(students[1]()); // funtion() 2 mistake error
// students.splice(1,1) // (1,4) number get to undefine nhi hoga
console.splice(1, 0, "Hassan", "Raza") //index jo likha hai yeh wahan add kerdye ga or 0 is no delete
console.log(students)

// ARRAY METHOD (SLICE) use for copy making  and its run on string too
var students = ["saira", " sajida", " ali"];
console.log(students.slice(0, 2)) //target index dosri value aik index ziyadah batani perti hai
console.log(students.slice(2)) // ali //if length Array khatam dosri value Optional ho jaye gi 

var school = "SMIT"; //var name mai spacing bhi count hoti hai string pr bhi chalta hai
console.log(school.slice(1, 1)) // kuch bhi nhi aye ga aik index ziyadah deni hogi
console.log(school.slice(1, 2)) // M

// CHAPTER # 18 FOR LOOP (repeation/iteration)

for (var i = 0; i < 5; i++) {
    //condition se cahlye ga block of code  //i++ updation
    console.log(i) //0-4 tk
}
// var aik bar declared ker diya to wo porye code mai her jagah mile ga.
console.log(i) //5

for (var i = 0; i < 2; i++) {
    console.log(i)
    break
} //0 loop end ho jaye ga no i++ (updation)
console.log(i) //0

// break , condition false in 2 methods se we stop loop
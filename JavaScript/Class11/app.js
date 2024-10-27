// for (var i = 0; i<5 ; i++){
//     console.log(i)
//     if(i==2){
//         break;
//     }
// }//0 1 2
// console.log("test");


// for (var i = 0; i<5; i++){
//     // console.log(i)
//     for(var j = 0 ; j < 5; j++){
//         console.log(i,j)
//     }
// } //right j left i OR i outer j inner loop


// Chapter # 21 (Changing Case)
// string ka method
// var fullName = "saira batool"
// fullName = fullName.slice(0,1).toUpperCase() + fullName.slice(1);

// console.log(fullName);

// Confirm True or not
var Username = "ghous ahmad";
var result = "";
var temp = "";


for (var i = 0; i < Username.length; i++) {
    if (i === 0) {
        result += Username[i].toUpperCase()
    } else if (Username[i] === " ") {
        temp = Username[i + 1].toUpperCase()
    } else {
        if (temp) {
            result += " " + temp;
            temp = "";
        } else {
            result += Username[i]
        }
    }
}
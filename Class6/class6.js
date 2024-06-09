var flag = true

if(flag)
{
    console.log("if is running");
}
else{
    comsol.log("else is running");
}


var familyName = prompt("Enter Your Full Name:")
// if you want to show alert box but condition is false  so how you can do that simple you have need to do is you simple declear a another var but remember one thing not change first variable acording to your need..  
var familyMember = "You are not our family member"

// Sana in if (...)
familyName.toLowerCase() === "sana" //true
familyName.toLowerCase() === "Sana" //false

if(familyName === "Shafqat Hussain"){
    document.write("You Are In Our FAmily List " , familyName);
    familyMember = familyName
}
else if(familyName === "Shahzad Hussain"){
    document.write("You Are In Our FAmily List " , familyName);
        familyMember = familyName
}
else if(familyName === "Sajida Batool"){
    document.write("You Are In Our FAmily List " , familyName);
        familyMember = familyName
}
else if(familyName === "Saira Batool"){
    document.write("You Are In Our FAmily List " , familyName);
        familyMember = familyName
}

else if(familyName === "Bilquis Fatima"){
    document.write("You Are In Our FAmily List " , familyName);
        familyMember = familyName
}
else{
    document.write("You Are Not In Our FAmily List " , familyName , " Go Ahead ");
}
alert(familyMember); // no need to write else portion

var num = 50; //true
if (num >= 50){
    console.log("num is greater");
}else{
    console.log("num is less than")
}

var courseName = "Web Dev"
if(courseName === "Web Dev"){
    console.log("You are enrolled")
}//for the multiple condition

var courseName = prompt("Enter Your Course")

// left to right (first hi true ho gai to wo agye check nhi karye ga)

// true false dekhnye k liye js kia leta hai with comma
// console.log(courseName === "Web Dev", courseName === "Graphic" , courseName === "Mobile");

// || OR Operator

if(courseName === "Web Dev" || courseName === "Graphic" || courseName === "Mobile"){
    console.log("You are enrolled");
}else{
    console.log("you are not enrolled");//"you are not enrolled"
}

// && AND Operator

var courseName1 = "Web Dev";
var courseName2 = "Graphic";
var courseName3 = "Mobile";
//Web Dev //true
if(courseName1 === "Web" && courseName2 === "Graphic" && courseName3 === "Mobile"){
    console.log("You are enrolled");
}else{
    console.log("you are not enrolled"); //you are not enrolled
}
//Events utalization of html and css in js
// onclick 
// document.getElementById


function foo(){
    alert("hello")
}


function foo(greet){
    alert(greet)
}

function getName(){
    var name = document.getElementById("name")
    alert(name.value)  //default value name.value = "Saira"
    // empty input 
    name.value = ""
    //Paragraph
    var para = document.getElementById("para")
    para.innerHTML = "This is so Amazing!!"
}

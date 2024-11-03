import "./App.jsx";
import React from "react";
import FruitsItem from "./components/FruitsItem.jsx";
import HungryMsg from "./components/HungryMsg.jsx";
import "./App.css"

function App() {
  let fruits = []
  // let fruits = ["Grapes", "Orange", "Mango", "Apple", "Banana"];

  // if(fruits.length===0){
  //   return <h3>I'm Hungry</h3> //because we return if so no need to write else
  // }

  // best is use to ternary operator
  return (
    //else
    <React.Fragment>
      <h1 className="heading">Healthy Fruits </h1>
      <HungryMsg items={fruits}></HungryMsg>
      <FruitsItem items={fruits}></FruitsItem>
    </React.Fragment>
  )
}

export default App;

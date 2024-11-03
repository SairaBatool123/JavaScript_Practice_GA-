import Items from "./Items";

const FruitsItem = ({items}) => {

  // let fruits = ["Grapes", "Orange", "Mango", "Apple", "Banana"];

  return(

  <ul className="list-group">
    {items.map((item) => (
      <Items key={item} itemsAre={item}></Items>
    ))}
  </ul>
  )
  
};

export default FruitsItem;

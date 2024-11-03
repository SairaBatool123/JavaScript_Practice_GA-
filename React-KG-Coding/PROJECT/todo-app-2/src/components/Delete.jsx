import {DeleteItem} from "./DeleteItem.jsx";


function DeleteTodo({todoItems}) {
  return (
    <div className="row">
{todoItems.map((item)=>(
<DeleteItem todoDate={item.dueDate} todoName={item.name}></DeleteItem>
))} 
    </div>
  );
}
export default DeleteTodo;

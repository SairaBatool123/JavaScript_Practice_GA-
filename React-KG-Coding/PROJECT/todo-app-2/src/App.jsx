import TodoHead from "./components/Todo.jsx";
import AddTodo from "./components/Add.jsx";
import "./App.css";
import DeleteTodo from "./components/DeleteItem.jsx";

function App() {
  let todoItem = [
    {
      name: "buy milk",
      dueDate:"4 / 2 / 2009",
    },
    {
      name: "not buy milk",
      dueDate: "4 / 2 / 2009",
    }
  ];
  return (
    <div className="col-12">
      <TodoHead></TodoHead>
      <AddTodo></AddTodo>
      <DeleteTodo todoItems={todoItem}></DeleteTodo>
    </div>
  );
}
export default App;

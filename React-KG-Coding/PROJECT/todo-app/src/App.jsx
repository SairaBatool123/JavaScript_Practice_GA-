import TodoHead from "./components/Todo.jsx";
import AddTodo from "./components/Add.jsx";
import DeleteTodo from "./components/Delete.jsx";
import "./App.css";

function App() {
  return (
    <div class="col-12">
      <TodoHead></TodoHead>
      <AddTodo></AddTodo>
      <DeleteTodo></DeleteTodo>
    </div>
  );
}
export default App;

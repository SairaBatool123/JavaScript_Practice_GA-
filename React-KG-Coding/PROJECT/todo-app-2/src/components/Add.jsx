function AddTodo(){
return <div className="row">
<div className="col-4"><input type="text" placeholder="Enter Your Task Here" /></div>
<div className="col-4"><input type="date" /></div>
<div className="col-2"><button className="btn btn-success pe-4">Add</button></div>
</div>
}
export default AddTodo;
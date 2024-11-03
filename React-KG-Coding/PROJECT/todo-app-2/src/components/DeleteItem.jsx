function DeleteItem({ todoName, todoDate }) {
  return (
    <div className="row">
      <div className="col-4">
        {todoName}
      </div>
      <div className="col-4">
        {todoDate}
      </div>
      <div className="col-2">
        <button className="btn mt-2 btn-danger">Delete</button>
      </div>
    </div>
  );
}
export default DeleteItem;

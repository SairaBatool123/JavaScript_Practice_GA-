function DeleteTodo() {
  return (
    <div class="row">
      <div className="col-4">
     <ol>
      <li class='mt-3'>Brush</li>
      <li class='mt-3'>Comb</li>
      <li class='mt-3'>Nails</li>
     </ol>
     </div>
     <div className="col-4">
     <ul style={{listStyle:'none'}}>
      <li class='mt-3'>1-5-3076</li>
      <li class='mt-3'>2-7-2025</li>
      <li class='mt-3'>3-4-2013</li>
     </ul>
     </div>
     <div className="col-2">
     <button class="btn mt-2 btn-danger">Delete</button>
     <button class="btn mt-2  btn-danger">Delete</button>  <button class="btn mt-2  btn-danger">Delete</button>
     </div>
    </div>

  );
}
export default DeleteTodo;

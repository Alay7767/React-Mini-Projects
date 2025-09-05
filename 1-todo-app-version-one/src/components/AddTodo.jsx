function AddTodo(){
    return (
    <div class="container">
      <div class="row our-row">
        <div class="col-6">
          <input type="text" placeholder="Enter TODO Here" />
        </div>
        <div class="col-4">
          <input type="date" />
        </div>
        <div class="col-2">
          <button type="button" class="btn btn-success our-btn">ADD</button>
        </div>
      </div>
    </div>
    )
}

export default AddTodo;
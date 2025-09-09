function AddTodo(){
    return (
    <div className="container">
      <div className="row our-row">
        <div className="col-6">
          <input type="text" placeholder="Enter TODO Here" />
        </div>
        <div className="col-4">
          <input type="date" />
        </div>
        <div className="col-2">
          <button type="button" className="btn btn-success our-btn">ADD</button>
        </div>
      </div>
    </div>
    )
}

export default AddTodo;
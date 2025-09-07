import { useState } from "react";
import { MdOutlineAddCircleOutline, MdDelete } from "react-icons/md";


function AddTodo({ onNewItem }) {

  const [todoName, setTodoName] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handleNameChange = (event) => {
    // console.log(event.target.value);
    setTodoName(event.target.value);
  };

  const handleDateChange = (event) => {
    // console.log(event.target.value);
    setDueDate(event.target.value);
  };

  const handleAddButtonClicked = () => {
    onNewItem(todoName, dueDate);
    setDueDate("");
    setTodoName("");
  };


  return (
    <div className="container">
      <div className="row our-row">
        <div className="col-6">
          <input type="text" placeholder="Enter TODO Here" value={todoName} onChange={handleNameChange} />
        </div>
        <div className="col-4">
          <input type="date" value={dueDate} onChange={handleDateChange} />
        </div>
        <div className="col-2">
          <button type="button" className="btn btn-success our-btn" onClick={handleAddButtonClicked}>
            <MdOutlineAddCircleOutline />

          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;

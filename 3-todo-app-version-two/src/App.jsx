import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import "./App.css";



function App() {

  const todoItems = [{
    name: 'Buy Milk',
    dueDate: '04/10/2025',
  },
  {
    name: 'Go to College',
    dueDate: '04/10/2025',
  },
  {
    name: 'Buy Fruits',
    dueDate: 'Right Now',
  },
];

  return (
    <center className='todo-container'>
      <AppName />
      <AddTodo />
      <TodoItems todoItems={todoItems}></TodoItems>
    </center>
  )
}

export default App

import TodoItem from "./TodoItem";
import Styles from "./TodoItems.module.css"

const TodoItems = ({ todoItems }) => {
    return <>
        <div className={Styles.itemsContainer}>
            {todoItems.map(item =>
                <TodoItem todoDate={item.dueDate} todoName={item.name}></TodoItem>
            )}
        </div>
    </>
}

export default TodoItems;
import { GrClose } from "react-icons/gr"

const TodoItem = ({editTodo, deleteTodo, todo}) => {
    const handleEdit  = () =>{
        editTodo(todo)
    }
    const handleDelete = () => {
        deleteTodo(todo.id)
    }
  return (
        <li className={`todo-item ${todo.completed  ? 'checked' : ''}`}>
            <div onClick={handleEdit} className="todo-text text-white">{todo.text}</div>
            <div onClick={handleDelete} className="todo-delete"><GrClose/></div>
        </li>
  )
}
export default TodoItem
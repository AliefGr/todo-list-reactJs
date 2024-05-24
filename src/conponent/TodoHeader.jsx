import { useState } from "react";

const TodoHeader = ({addTodo}) => {

    const [todoInput, setTodoInput] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        addTodo(todoInput);
    }

    const handleChange = (e) => {
        setTodoInput(e.target.value);
        console.log(todoInput);
    }

  return (
    <>
        <header>
            <h1>To Do List</h1>
            <form action="" onSubmit={handleSubmit}>
                <input type="text" value={todoInput} onChange={handleChange} className="text-slate-900 py-2 px-4  rounded-e-none" />
                <button className="text-white bg-green-400 py-2 px-4">Add</button>
            </form>
        </header>
    </>
  )
}
export default TodoHeader

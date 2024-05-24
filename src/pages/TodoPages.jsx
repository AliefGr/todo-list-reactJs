import TodoHeader from "../conponent/TodoHeader";
import TodoList from "../conponent/TodoList";
import { TodosFetchApi, CreateTodoApi, EditTodoApi, deleteTodoApi } from "../api/TodosApi";
import { useEffect, useState } from "react";


const TodoPages = () => {
    const [todos, setTodos] = useState([]);

    const fetchApi = async () => {
        const res = await TodosFetchApi();
        setTodos(res.data)
    }
    useEffect(() => {
        fetchApi()
    }, [])

// Tambah Todo
const addTodo = async (text) => {
    const todo = {text : text, completed : false};
    const res = await CreateTodoApi(todo);
    setTodos([...todos, res.data])
}

// Edit Todo
const editTodo = async (data) =>{
    const editedTodo = {...data, completed : !data.completed};
    const res = await EditTodoApi(data.id, editedTodo);
    const updatedTodo = todos.map(todo => {
        if(todo.id === data.id){
            return {...todo, ...res.data}
        }
        return todo
    })
    setTodos(updatedTodo)
}

// TypeError: todo is not iterable
const deleteTodo = async (id) => {
    await deleteTodoApi(id);
    const updatedTodo = todos.filter(todo => todo.id !== id)
    setTodos(updatedTodo)
}
  return (
    <div>
        <TodoHeader addTodo={addTodo}/>
        <TodoList todos={todos}  editTodo={editTodo} deleteTodo={deleteTodo}/>
    </div>
  )
}
export default TodoPages
import axios from "axios";

export const TodosFetchApi = async () => {
    const res = await axios.get('http://localhost:5001/todos');
    return res
}
export const CreateTodoApi = async (todo) => {
    const res = await axios.post('http://localhost:5001/todos', todo);
    return res
}

export const EditTodoApi = async (id, data) => {
    const res = await axios.put(`http://localhost:5001/todos/${id}`, data);
    return res
}

export const deleteTodoApi = async (id) => {
    const res = await axios.delete(`http://localhost:5001/todos/${id}`);
    return res
}
import { useState } from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ editTodo, deleteTodo, todos }) => {
  return (
    <>
      <ul>
        {todos.map((todo) => {
          return (
            <TodoItem
              key={todo.id}
              todo={todo}
              editTodo={editTodo}
              deleteTodo={deleteTodo}
            />
          );
        })}
      </ul>
    </>
  );
};
export default TodoList;

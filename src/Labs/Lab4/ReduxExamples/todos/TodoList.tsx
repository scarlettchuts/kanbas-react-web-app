import React, { useState } from "react";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";

export default function Todolist() {
  const { todos } = useSelector((state: any) => state.todosReducer);
  // const [todo, setTodo] = useState({ id: "-1", title: "Learn Mongo" });
  // const addTodo = (Todo: any) => {
  //   const newTodos = [
  //     ...todos,
  //     { ...todo, id: new Date().getTime().toString() },
  //   ];
  //   setTodos(newTodos);
  //   setTodo({ id: "-1", title: "" });
  // };
  // const deleteTodo = (id: string) => {
  //   const newTodos = todos.filter((todo) => todo.id !== id);
  //   setTodos(newTodos);
  // };
  // const updateTodo = (todo: any) => {
  //   const newTodos = todos.map((item) => (item.id === todo.id ? todo : item));
  //   setTodos(newTodos);
  //   setTodo({ id: "-1", title: "" });
  // };
  return (
    <div>
      <h2>Todo List</h2>
      <ul className="list-group">
        <TodoForm />
        {todos.map((todo: any) => (
          <TodoItem todo={todo} />
        ))}
        {/* <TodoForm
          todo={todo}
          setTodo={setTodo}
          addTodo={addTodo}
          updateTodo={updateTodo}
        />
        {todos.map((todo) => (
          <TodoItem todo={todo} deleteTodo={deleteTodo} setTodo={setTodo} />
        ))} */}

        {/* <li className="list-group-item">
          <button onClick={() => addTodo(todo)} id="wd-add-todo-click">
            Add
          </button>
          <button onClick={() => updateTodo(todo)} id="wd-update-todo-click">
            Update
          </button>
          <input
            value={todo.title}
            onChange={(e) => setTodo({ ...todo, title: e.target.value })}
          />
        </li>
        {todos.map((todo) => (
          <li key={todo.id} className="list-group-item">
            <button
              onClick={() => deleteTodo(todo.id)}
              id="wd-delete-todo-click"
            >
              Delete
            </button>
            <button onClick={() => setTodo(todo)} id="wd-set-todo-click">
              Edit
            </button>
            {todo.title}
          </li>
        ))} */}
      </ul>
    </div>
  );
}

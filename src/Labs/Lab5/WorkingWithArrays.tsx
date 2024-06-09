import React, { useState } from "react";
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
export default function WorkingWithArrays() {
  const API = `${REMOTE_SERVER}/lab5/todos`;
  const [todo, setTodo] = useState({
    id: "1",
    title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    due: "2021-09-09",
    completed: false,
  });
  const TODO_API_URL = `${REMOTE_SERVER}/lab5/todos`;

  const [isChecked, setIsChecked] = useState(false);
  const [id, setId] = useState(1);

  const [description, setDescription] = useState("");

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div id="wd-working-with-arrays">
      <h3>Working with Arrays</h3>
      <h4>Retrieving Arrays</h4>
      <a id="wd-retrieve-todos" className="btn btn-primary" href={API}>
        Get Todos{" "}
      </a>
      <hr />
      <h4>Retrieving an Item from an Array by ID</h4>
      <input
        className="form-control w-75"
        id="wd-todo-item"
        value={todo.id}
        onChange={(e) => setTodo({ ...todo, id: e.target.value })}
      />
      <a
        id="wd-retrieve-item-from-array-by-id"
        className="btn btn-primary"
        href={`${TODO_API_URL}/${todo.id}`}
      >
        Get Todo by ID{" "}
      </a>
      <hr />
      <h3>Filtering Array Items</h3>
      <a
        id="wd-retrieve-completed-todos"
        className="btn btn-primary"
        href={`${API}?completed=true`}
      >
        Get Completed Todos
      </a>
      <hr />
      <h3>Creating new Items in an Array</h3>
      <a
        id="wd-retrieve-completed-todos"
        className="btn btn-primary"
        href={`${API}/create`}
      >
        Create Todo
      </a>
      <hr />
      <h3>Deleting from an Array</h3>
      <a
        id="wd-retrieve-completed-todos"
        className="btn btn-primary float-end"
        href={`${API}/${todo.id}/delete`}
      >
        Delete Todo with ID = {todo.id}{" "}
      </a>
      <input
        value={todo.id}
        className="form-control w-50"
        onChange={(e) => setTodo({ ...todo, id: e.target.value })}
      />
      <hr />
      <h3>Updating an Item in an Array</h3>
      <a
        href={`${API}/${todo.id}/title/${todo.title}`}
        className="btn btn-primary float-end"
      >
        Update Todo
      </a>
      <input
        value={todo.id}
        className="form-control w-25 float-start me-2"
        onChange={(e) => setTodo({ ...todo, id: e.target.value })}
      />
      <input
        value={todo.title}
        className="form-control w-50 float-start"
        onChange={(e) => setTodo({ ...todo, title: e.target.value })}
      />
      <br />
      <br />
      <hr />
      <h3>Editing completed properties of todo items</h3>
      <input
        className="form-control w-50 float-start me-2"
        value={id}
        onChange={(e) => setId(parseInt(e.target.value))}
      />
      <label>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        Completed
      </label>
      <a
        href={`${API}/${id}/completed/${isChecked}`}
        className="btn btn-primary float-end"
      >
        Update completed
      </a>
      <br />
      <br />
      <hr />
      <h3>Editing description properties of todo items</h3>
      <input
        className="form-control w-25 float-start me-2"
        value={id}
        onChange={(e) => setId(parseInt(e.target.value))}
      />
      <input
        value={todo.description}
        className="form-control w-50 float-start me-2"
        onChange={(e) => setTodo({ ...todo, description: e.target.value })}
      />
      <a
        href={`${API}/${id}/description/${todo.description}`}
        className="btn btn-primary float-end"
      >
        Update description
      </a>
      <br />
      <br />
      <hr />
    </div>
  );
}

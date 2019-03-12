import React from "react";
import "./Todo.css";

function Todo(props) {
  return (
    <div className="todo-wrapper">
      {props.todo.task}
      <button
        className="removeTodo"
        onClick={e => props.removeTodo(props.todo.id)}
      >
        remove
      </button>
    </div>
  );
}

export default Todo;

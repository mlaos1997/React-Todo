import React from "react";
import "./Todo.css";

function TodoForm(props) {
  return (
    <div className="form">
      <form onSubmit={props.formSubmitHandler}>
        <input
          type="text"
          value={props.todoTask}
          className="todo-input"
          onChange={props.handleChange}
        />
        <button className="" type="submit">
          Add Todo
        </button>
      </form>
    </div>
  );
}

export default TodoForm;

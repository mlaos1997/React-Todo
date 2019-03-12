import React from "react";
import "./styles.css";
import TodoForm from "./components/TodoForm";
import Todo from "./components/Todo";
// import TodoList from "./components/TodoList";
let idCounter = () => {
  let id = 4;
  return function countUp() {
    return id++;
  };
};

const idUp = idCounter();

const todos = [
  { task: "Organize Garage", id: 1, completed: false },
  { task: "Bake Cookies", id: 2, completed: false },
  { task: "Master React", id: 3, completed: false }
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos
    };
  }

  removeTodo = id => {
    this.setState({
      todos: this.state.todos.filter((todo, index) => todo.id !== id)
    });
  };

  handleChange = e => {
    this.setState({ value: e.target.value });
  };

  formSubmitHandler = event => {
    // if todo isnt empty, then execute
    event.preventDefault();
    let newTodo = {
      task: this.state.value,
      completed: false,
      id: idUp()
    };

    // clear value after todo is added
    this.setState(prevState => {
      return {
        todos: [...prevState.todos, newTodo]
      };
    });
    console.log(newTodo);
  };

  render() {
    return (
      <div className="App">
        <h2>Welcome to your Todo App!</h2>
        <ul>
          {this.state.todos.map(todo => {
            return (
              <Todo
                removeTodo={this.removeTodo}
                todo={todo}
                key={todo.id}
                removeTodo={this.removeTodo}
              />
            );
          })}
        </ul>
        <TodoForm
          handleChange={this.handleChange}
          formSubmitHandler={this.formSubmitHandler}
          todoTask={this.state.todos.task}
          addTodo={this.addTodo}
        />
      </div>
    );
  }
}

export default App;

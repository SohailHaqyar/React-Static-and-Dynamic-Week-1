import React, { Component } from "react";
import Todos from "./Todos";
import AddTodo from "./AddTodo";
class App extends Component {
  state = {
    todos: [
      { id: 1, description: "What do you call a deer with no eyes No Idea" },
      { id: 2, description: 'Me "How Do I Look" MyDad "With your eyes"' },
      {
        id: 3,
        description:
          'Me "Dad make me a Sandwich" MyDad "Poof! You are a Sandwich"'
      },
      {
        id: 4,
        description:
          "What do you call somebody with no body and no nose. Nobody Knows !"
      }
    ]
  };
  /////// Add Todos
  addTodo = todo => {
    todo.id = Math.random();
    let todos = [...this.state.todos, todo];
    this.setState({
      todos
    });
  };

  ////// Delete Todos

  deleteTodo = id => {
    let todos = this.state.todos.filter(todo => {
      return todo.id !== id;
    });
    this.setState({
      todos
    });
  };

  /////////// Render

  render() {
    return (
      <div className="App container">
        <h1 className="center blue-text"> Just Do It Later</h1>
        <p>Are you the kind of guy who likes to do stuff with the help of deadline induced panic</p>
        <p>This site is for you and here some Jokes to waste your time</p>
        <Todos deleteTodo={this.deleteTodo} todos={this.state.todos} />
        <AddTodo addTodo={this.addTodo} />
      </div>
    );
  }
}

export default App;

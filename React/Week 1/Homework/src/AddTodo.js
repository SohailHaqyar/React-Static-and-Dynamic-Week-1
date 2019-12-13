import React, { Component } from 'react'

class AddTodo extends Component {
  state = {
    description:''
  };
  //Handle Submit
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state)
  }
  // Handle Change
  handleChange = (e) => {
    this.setState({
      [e.target.id] : e.target.value
    });
  }

  // render

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Add Todo</label>
          <input type="text" id="description" onChange={this.handleChange}/>
          <button> Submit </button>
        </form>
      </div>
    );
  }
};

export default AddTodo;
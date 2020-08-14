import React, { Component } from 'react';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';

class App extends Component {
  state = {
    todos: [
      { id: 1, content: 'buy some milk'},
      {id: 2, content: 'play mario kart'},
      {id: 3, content: 'Go for swimming'}
    ]
  }

  
  deleteTodo = (id) =>{
    const todos = this.state.todos.filter(todo =>{
      return(todo.id !== id)
    })
    this.setState({
      todos
    })
  }

  addTodo = (todo) =>{
    todo.id = Math.random()
    let todos = [...this.state.todos, todo]
    this.setState({
      todos
    })
  }
  
  render() {
    return (
      <div className="todoApp container">
      <h1 className="center blue-text">Todo's</h1>
        <Todos deleteTodo = {this.deleteTodo} todos = {this.state.todos} />
        <AddTodo addTodo = {this.addTodo}/>
      </div>
    );
  }
}

export default App;

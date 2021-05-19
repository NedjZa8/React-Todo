import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import TodoList from './TodoList/todolist';

class App extends Component {
  render(){
    return(
      <TodoList />
    );
  }
}

export default App;

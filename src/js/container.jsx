import React from 'react';
import render from 'react-dom';
import TodoItem from './components/Todo.jsx';
import TodoList from './components/TodoList.jsx';

const Todos = React.createClass({
getInitialState: function() {
    return {todos:
      [ 
        { id: 0, isDone: true,  text: 'make components' },
        { id: 1, isDone: false, text: 'design actions' },
        { id: 2, isDone: false, text: 'implement reducer' },
        { id: 3, isDone: false, text: 'connect components' }
    ]};
  },
  render: function () {
    return(
      <div className="container">
        <div className="jumbotron">
          <p> Add your Todo List</p>
          <div className="form-group">
            <input type="text" className="form-control" placeholder="Add your to-do Thingy"/>
          </div>
          <button type="button" className="btn-lg btn-primary">Add</button>
        </div>
      </div>
      );
  }
});

export default Todos;

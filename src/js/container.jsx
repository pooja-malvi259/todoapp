import React from 'react';
import render from 'react-dom';
import TodoItem from './components/Todo.jsx';
import TodoList from './components/TodoList.jsx';

const Main = React.createClass({
getInitialState: function() {
    return {
      todos:[ 
              { index: 0, 
                isDone: true,  
                text: 'Make components' 
              },
              { index: 1, 
                isDone: false, 
                text: 'Design actions' 
              },
              { index: 2, 
                isDone: false, 
                text: 'Implement reducer' 
              },
              { index: 3, 
                isDone: false, 
                text: 'Connect components' 
              }
            ]
    };
  },
  render: function () {
    var Todo = this.state.todos.map(function(val,index) {
         return(
            <TodoList key={index} index={index} val={val}/>
         )
      }.bind(this));
    return(
      <div className="container">
        <div className="jumbotron">
          <p> Add your Todo List</p>
          <div className="form-group">
            <input type="text" className="form-control" placeholder="Add your to-do Thingy"/>
          </div>
          <button type="button" className="btn-lg btn-primary">Add</button>
        </div>
        <h3> Things to be done today:</h3>
        <div className="todo-box">
          { Todo }
        </div>
        <div>
          <button type="button" className="btn btn-default">All</button>
          <button type="button" className="btn btn-default">Done</button>
          <button type="button" className="btn btn-default">Not Done</button>
        </div>
      </div>
      );
  }
});

export default Main;

import React from 'react';
import render from 'react-dom';
import Footer from './components/Footer.jsx'
import AddTodo from './container/AddTodo.jsx'
import VisibleTodoList from './container/VisibleTodoList.jsx'



const Main = React.createClass({
getInitialState: function() {
    return {
      todos:[ ]
    };
  },
  render: function () {
    return(
      <div className="container">
        <AddTodo />
        <h3> Things to be done today:</h3>
        <VisibleTodoList />
        <Footer />
      </div>
      );
  }
  
});

export default Main;

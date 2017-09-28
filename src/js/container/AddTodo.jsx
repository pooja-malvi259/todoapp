import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';

let AddTodo = ({ dispatch }) => {
  let input;

  return (
    <div className="jumbotron">
      <p> Add your Todo List</p>
      <form
        onSubmit={e => {
          e.preventDefault()
          if (!input.value.trim()) {
            return
          }
          dispatch(addTodo(input.value))
          input.value = ''
        }}
      >
      <div className="form-group">
        <input type="text" className="form-control" placeholder="Add your to-do Thingy" ref={node => { input = node }}/>
      </div>
      <button type="submit" className="btn-lg btn-primary">Add</button>
      </form>
    </div>
  )
}
AddTodo = connect()(AddTodo)

export default AddTodo;
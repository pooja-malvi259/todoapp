import React from 'react';
import PropTypes from 'prop-types'
import TodoItem from './Todo.jsx';


const TodoList = ({ todos, onTodoClick }) => (
	<div className="form-check">			
			{ todos.map((todo, index) => {console.log(todo); return (
      			<TodoItem key={todo.id} {...todo} onClick={() => onTodoClick(index)} />
    		);})}
	</div>
	);

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      isDone: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  onTodoClick: PropTypes.func.isRequired
}

export default TodoList;
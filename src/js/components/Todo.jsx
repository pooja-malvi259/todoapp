import React from 'react';
import PropTypes from 'prop-types';


const TodoItem = ({ onClick, completed, text }) => (
	<input className="form-check-input margin-box" type="checkbox" value="" onClick={ onClick } />
  	<li style={{ textDecoration: isDone ? 'line-through' : 'none' }}>
    	{ text }
  	</li>
);


TodoItem.propTypes = {
  onClick: PropTypes.func.isRequired,
  isDone: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default TodoItem;
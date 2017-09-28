import React from 'react';
import PropTypes from 'prop-types'

const TodoItem = ({ onClick, isDone, text }) => (
	<div>
		<label className="form-check-label" htmlFor="todoItem">
			<input className="form-check-input margin-box" type="checkbox" onClick={ onClick } checked={ isDone } />
	    	<span style={{ textDecoration: isDone ? 'line-through' : 'none' }}>{ text }</span>
	    </label>
    </div>
);

TodoItem.propTypes = {
  onClick: PropTypes.func.isRequired,
  isDone: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default TodoItem;
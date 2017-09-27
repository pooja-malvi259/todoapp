import React from 'react';
import PropTypes from 'prop-types'

const TodoItem = ({ onClick, isDone, text }) => (
	<div>
		<input className="form-check-input margin-box" type="checkbox" value=""  />
	  	<p style={{ textDecoration: isDone ? 'line-through' : 'none' }} onClick={ onClick } >
	    	{ text }
	    </p>
    </div>
);

TodoItem.propTypes = {
  onClick: PropTypes.func.isRequired,
  isDone: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}


export default TodoItem;
import React from 'react';

const TodoList = React.createClass({
	render: function(){
		return (
			<div className="form-check">
  				<label className="form-check-label">
	    			<input className="form-check-input margin-box" type="checkbox" value=""/>
	    			{ this.props.val.text }
  				</label>
			</div>
			);
	}});

export default TodoList;
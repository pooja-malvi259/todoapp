import React from 'react';
import PropTypes from 'prop-types';

const LinkItem = ({ active, children, onClick }) => {
  if (active) {
    return <button type="button" className="btn btn-default">{children}</button>
  };

  return (
  	<button type="button" className="btn btn-default" onClick={ e => { e.preventDefault(); onClick(); }}>{ children }</button>
  )
};

LinkItem.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
};

export default LinkItem;
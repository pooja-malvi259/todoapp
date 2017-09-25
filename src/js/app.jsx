import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import todoApp from './reducers';
import Main from './container.jsx';


let store = createStore(todoApp);

render(
  <Main/>,
  document.getElementById('app')
);


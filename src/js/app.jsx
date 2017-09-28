import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { loadState, saveState } from './localStorage.jsx';
import throttle from 'lodash/throttle';
import todoApp from './reducer';
import Main from './container.jsx';

const persistedState = loadState();
const store = createStore( todoApp, persistedState );

store.subscribe(throttle(() => {
	saveState({
		todos: store.getState().todos
	});
},1000));

render(
  <Provider store={ store }>
    <Main />
  </Provider>,
  document.getElementById('app')
);
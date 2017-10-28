import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import {createStore} from 'redux';
import readableAppReducer from './reducers';
import Root from './components/Root';

const store = createStore(
  readableAppReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

/*const render = () => {
  ReactDOM.render(<Root store={store}/>, document.getElementById('root'));
};
render();
store.subscribe(render);*/
ReactDOM.render(<Root store={store}/>, document.getElementById('root'));
registerServiceWorker();

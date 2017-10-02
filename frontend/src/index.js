import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {createStore} from 'redux';
import readableAppReducer from './reducers';
import Root from './components/Root';

const store = createStore(
  readableAppReducer,
  window.__REDUX_DEVTOOLS_EXTENSION_ && window.__REDUX_DEVTOOLS_EXTENSION_()
);

console.log("STORE: ", store.getState());

ReactDOM.render(<Root store={store}/>, document.getElementById('root'));
registerServiceWorker();

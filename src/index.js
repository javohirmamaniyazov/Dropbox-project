import React from 'react'
import thunk from 'redux-thunk'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import 'firebase/firestore'
import 'firebase/storage'
import { createStore, applyMiddleware, compose } from 'redux'
import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App'
import rootReducer from './store/rootReducer'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
)

ReactDOM.render(
  <Provider store={store}>
      <App />
  </Provider>,
  document.getElementById('root')
)
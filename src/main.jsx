import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './containers/App.jsx'
import { createLogger } from 'redux-logger'
import { applyMiddleware, combineReducers, createStore } from 'redux';
import { searchCharacters } from './reducers.js';
import { thunk } from 'redux-thunk';
import { Provider } from 'react-redux';

const logger = createLogger();

const rootReducers = combineReducers({ searchCharacters })

const store = createStore(rootReducers, applyMiddleware(thunk, logger))

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
)

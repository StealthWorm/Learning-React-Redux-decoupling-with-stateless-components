import { createStore, compose, applyMiddleware } from 'redux';
import rootReducer from '../actions';
import { thunk } from 'redux-thunk';

const initialState = {};
const enhancers = [];
const middleware = [thunk];

if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.devToolsExtension;

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension())
  }
}

const composeEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers,
)

const store = createStore(
  rootReducer,
  initialState,
  composeEnhancers
)

export default store;
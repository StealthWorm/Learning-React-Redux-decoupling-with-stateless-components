import { createStore, compose } from 'redux';
import rootReducer from '../actions';

const initialState = {};
const enhancers = [];

if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.devToolsExtension;

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension())
  }
}

const composeEnhancers = compose(
  ...enhancers
)

const store = createStore(
  rootReducer,
  initialState,
  composeEnhancers
)

export default store;
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Calculator from './components/Calculator';
import registerServiceWorker from './registerServiceWorker';
import store from './store';
import { Provider } from 'react-redux';

const renderCalculator = () => {
  ReactDOM.render(
    <Provider store={store}>
      <Calculator />
    </Provider>, document.getElementById('root'));
};

store.subscribe(renderCalculator);
renderCalculator();
registerServiceWorker();

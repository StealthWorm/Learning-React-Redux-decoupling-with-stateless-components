import React, { Component } from 'react';
import Display from '../Display';
import ControlPanel from '../ControlPanel';
import Digits from '../Digits';
import Operators from '../Operators';
import History from '../History';
import './Calculator.css';
import ee from '../../eventEmitter';
import store from '../../store';

class Calculator extends Component {
  constructor(props) {
    super(props);

    ee.addListener('displayUpdate', () => this.forceUpdate()); // coming from React.Component class
  }
  render() {
    return (
      <main className="react-calculator">
        <Display text={store.curExpression} />
        <ControlPanel />
        <Digits />
        <Operators />
        <History />
      </main>
    )
  }
}

export default Calculator;
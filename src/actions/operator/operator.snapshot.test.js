import renderer from 'react-test-renderer';
import { operatorClick } from './index';

describe('operatorClick action', () => {
  it('should have the correct shape', () => {
    const operator = '+';
    const action = operatorClick(operator);
    expect(action).toMatchSnapshot();
  });
});
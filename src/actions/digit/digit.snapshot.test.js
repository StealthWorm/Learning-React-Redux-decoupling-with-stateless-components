import renderer from 'react-test-renderer';
import { digitClick } from './index';

describe('digitClick action', () => {
  it('should have the correct shape', () => {
    const digit = 5;
    const action = digitClick(digit);
    expect(action).toMatchSnapshot();
  });
});
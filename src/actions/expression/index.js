import { CLICKED_DIGIT_KEY, DIGIT_CLICK_ACTION } from '../digit';
// import { CLICKED_OPERATOR_KEY, OPERATOR_CLICK_ACTION } from '../operator';

export const EXPRESSION_UPDATE_ACTION = 'EXPRESSION_UPDATE_ACTION';
export const NEW_EXPRESSION_KEY = 'NEW_EXPRESSION_KEY';

export const updateExpression = newExp => ({
  type: EXPRESSION_UPDATE_ACTION,
  payload: { [NEW_EXPRESSION_KEY]: newExp }
});

export const expressionReducer = (state = 0, { type, payload }) => {
  switch (type) {
    case EXPRESSION_UPDATE_ACTION:
      return (payload[NEW_EXPRESSION_KEY] || payload[NEW_EXPRESSION_KEY] === 0)
        ? payload[NEW_EXPRESSION_KEY]
        : state;
    case DIGIT_CLICK_ACTION:
      if (!state) {
        return payload[CLICKED_DIGIT_KEY]
      }
      return `${state}${payload[CLICKED_DIGIT_KEY]}`;
    // case OPERATOR_CLICK_ACTION:
    //   if (!state) {
    //     return payload[CLICKED_OPERATOR_KEY]
    //   }
    //   return `${state}${payload[CLICKED_DIGIT_KEY]}`;
    default:
      return state;
  }
};
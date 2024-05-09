export const OPERATOR_CLICK_ACTION = 'OPERATOR_CLICK_ACTION';
export const CLICKED_OPERATOR_KEY = 'CLICKED_OPERATOR_KEY';

export const operatorClick = operator => ({
  type: OPERATOR_CLICK_ACTION,
  payload: { [CLICKED_OPERATOR_KEY]: operator }
})
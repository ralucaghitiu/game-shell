const initialState = 42;

/**
 *
 * add: {
 *  type: 'add',
 * }
 *
 * sub: {
 *  type: 'sub'
 * }
 *
 */
export const counterReducer = (state = initialState, action) => {
  const { type, payload } = action;

  if (type === 'counter/add') {
    state = state + 1;

    return state;
  }

  if (type === 'counter/sub') {
    state = state - 1;

    return state;
  }

  if (type === 'counter/increase') {
    state = state + payload;

    return state;
  }

  return state;
};

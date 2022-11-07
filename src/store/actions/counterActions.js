// actions must also be pure functions
export const add = () => {
  return {
    type: 'counter/add',
  };
};

export const sub = () => {
  return {
    type: 'counter/sub',
  };
};

export const addNumber = (number) => {
  return {
    type: 'counter/increase',
    payload: number,
  };
};

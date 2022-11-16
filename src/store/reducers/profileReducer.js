const initialState = {
  creature: {
    mainColor: '#ffabce',
    secondaryColor: '#ff7bad',
    eyeColor: '#000000',
  },
};

// eyeColor, #888888
export const profileReducer = (state = initialState, action) => {
  const { payload, type } = action;

  switch (type) {
    case 'profile/setCreatureColor':
      const { targetKey, colorValue } = payload;

      return {
        ...state,
        creature: {
          ...state.creature,
          [targetKey]: colorValue,
        },
      };
    default:
      return state;
  }
};

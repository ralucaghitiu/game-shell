const initialState = {
  stats: {
    gamesWon: 0,
    gamesLost: 0,
    gamesPlayed: 0,
  },
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
    case 'profile/setCreatureColors':
      return {
        ...state,
        creature: payload,
      };
    case 'auth/setUserStats':
      return {
        ...state,
        stats: payload,
      };
    default:
      return state;
  }
};

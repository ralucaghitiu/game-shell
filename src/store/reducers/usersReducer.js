const initialState = {
  entities: [],
};

export const usersReducer = (state = initialState, { payload, type }) => {
  switch (type) {
    case 'users/setUsers':
      return {
        entities: payload,
      };
    case 'users/modifyRandomUser':
      const [first, ...restOfUsers] = state.entities;

      // unshift mutates
      restOfUsers.unshift({
        ...first,
        stats: {
          ...first.stats,
          gamesWon: 256,
        },
      });

      return {
        entities: restOfUsers,
      };

    default:
      return state;
  }
};

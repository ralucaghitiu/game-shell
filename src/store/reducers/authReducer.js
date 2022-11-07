const initialState = {
  user: {},
  established: true, // change to false
  authenticated: false,
};

export const authReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'auth/setUser':
      // exteremely explicit
      const newState = {
        user: {
          name: payload.name,
          surname: payload.surname,
        },
        authenticated: true,
        established: state.established,
      };

      return newState;
    default:
      return state;
  }
};

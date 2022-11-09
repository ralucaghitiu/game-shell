export const login = () => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(setUser());
    }, 2000);
  };
};

export const logout = () => {
  return {
    type: 'auth/logOut',
  };
};

export const setUser = () => {
  return {
    type: 'auth/setUser',
    payload: {
      name: 'Carol',
      surname: 'Carolson',
    },
  };
};

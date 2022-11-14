// export const login = () => {
//   return (dispatch) => {
//     setTimeout(() => {
//       dispatch(setUser());
//     }, 2000);
//   };
// };

// export const logout = () => {
//   return {
//     type: 'auth/logOut',
//   };
// };

export const setUser = (user) => {
  return {
    type: 'auth/setUser',
    payload: user,
  };
};

export const unsetUser = () => {
  return {
    type: 'auth/unsetUser',
  };
};

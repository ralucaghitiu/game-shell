export const setUser = () => {
  return {
    type: 'auth/setUser',
    payload: {
      name: 'Carol',
      surname: 'Carolson',
    },
  };
};

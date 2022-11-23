import { client } from '../../../api/users';

export const readUsers = () => {
  return async (dispatch) => {
    const { data } = await client.get('/users');

    dispatch(setUsers(data));
  };
};

export const setUsers = (payload) => {
  return {
    type: 'users/setUsers',
    payload,
  };
};

export const modifyRandomUser = () => {
  return {
    type: 'users/modifyRandomUser',
  };
};

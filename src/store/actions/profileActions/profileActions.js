import { client } from '../../../api/users';

export const setCreatureColors = (colorsObject) => {
  return {
    type: 'profile/setCreatureColors',
    payload: colorsObject,
  };
};

export const setCreatureColor = (targetKey, colorValue) => {
  return {
    type: 'profile/setCreatureColor',
    payload: {
      targetKey,
      colorValue,
    },
  };
};

export const createUserProfile = (id) => {
  return async (_, getState) => {
    const state = getState();
    const { profile } = state;

    const { data } = await client.post(`/profiles`, {
      id,
      creature: profile.creature,
    });

    return data;
  };
};

export const readUserProfile = (id) => {
  return async () => {
    const { data } = await client.get(`/profiles/${id}`);

    return data;
  };
};

export const updateUserProfile = (id, creature) => {
  return async () => {
    const payload = {
      creature,
    };

    const { data } = await client.patch(`/profiles/${id}`, payload);

    return data;
  };
};

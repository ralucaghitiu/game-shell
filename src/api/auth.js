import jwtDecode from 'jwt-decode';
import store from '../store';
import {
  createUser,
  readUser,
  setUser,
  setUserStats,
} from '../store/actions/authActions';
import {
  createUserProfile,
  readUserProfile,
  setCreatureColors,
} from '../store/actions/profileActions/profileActions';

let initialized = false;
const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;

export const initializeGoogleAuth = async () => {
  return new Promise((resolve) => {
    if (initialized) {
      return;
    }

    window.addEventListener('load', () => {
      /* global google */
      google.accounts.id.initialize({
        client_id: clientId,
        callback: (response) => {
          const {
            given_name: firstName,
            family_name: lastName,
            email,
            picture: avatar,
            sub: id,
            name,
          } = jwtDecode(response.credential);

          store.dispatch(
            setUser({
              firstName,
              lastName,
              email,
              avatar,
              id,
              name,
            }),
          );

          // refactor if possible
          store
            .dispatch(readUserProfile(id))
            .then((data) => {
              store.dispatch(setCreatureColors(data.creature));
            })
            .catch((_) => {
              store.dispatch(createUserProfile(id));
            });

          store
            .dispatch(readUser(id))
            .then((data) => {
              store.dispatch(setUserStats(data.stats));
            })
            .catch((_) => {
              store.dispatch(createUser(id));
            });
        },
        scope: 'email profile',
      });
      resolve();
      initialized = true;
    });
  });
};

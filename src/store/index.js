import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import {
  counterReducer,
  authReducer,
  profileReducer,
  usersReducer,
} from './reducers';

const reducers = combineReducers({
  auth: authReducer,
  counter: counterReducer,
  profile: profileReducer,
  users: usersReducer,
});

// recipe
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

export default store;

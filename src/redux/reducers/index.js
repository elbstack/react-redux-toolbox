import { combineReducers } from 'redux';
import { routerStateReducer } from 'redux-router';

import info from './info';

export default combineReducers({
  router: routerStateReducer,
  info
});

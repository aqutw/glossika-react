import { combineReducers } from 'redux';
import navReducer from './nav';
import blogReducer from './blog';

const rootReducer = combineReducers({
  nav: navReducer, // navReducer()   causes  Cannot read property 'type' of undefined
  blog: blogReducer,
});

export default rootReducer;

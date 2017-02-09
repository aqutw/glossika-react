import { combineReducers } from 'redux';
import { loadingBarReducer } from 'react-redux-loading-bar'
import navReducer from './nav';
import blogReducer from './blog';
import courseReducer from './course';

const rootReducer = combineReducers({
  loadingBar: loadingBarReducer,
  nav: navReducer, // navReducer()   causes  Cannot read property 'type' of undefined
  blog: blogReducer,
  course: courseReducer,
});

export default rootReducer;

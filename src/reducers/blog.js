import {
  FETCH_POSTS
} from '../actions/types';

const defaultState = {posts:[]};

const reducerFuncs = {
  [FETCH_POSTS]: (state, action) => {
    console.log('----------action.promisePayload', action.promisePayload);
    const ret = Object.assign({...state}, {posts:action.promisePayload.data})
    console.log(ret)
    return ret;
  }
};

export default function(state = defaultState, action) {
  console.log(state, action);
  return reducerFuncs[action.type] ? reducerFuncs[action.type](state, action) : state;
}
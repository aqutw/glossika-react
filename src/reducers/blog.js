import {
  FETCH_POSTS,
  FETCH_POST_BY_TITLE
} from '../actions/types';

const defaultState = {posts:[], curPost:{title:'', content:''}};

const reducerFuncs = {
  [FETCH_POSTS]: (state, action) => {
    const ret = Object.assign({...state}, {posts:action.promisePayload.data})
    return ret;
  },
  [FETCH_POST_BY_TITLE]: (state, action) => {
    const curPost = action.promisePayload.data;
    const ret = Object.assign({...state}, {curPost:curPost});
    return ret;
  }
};

export default function(state = defaultState, action) {
  console.log(state, action);
  return reducerFuncs[action.type] ? reducerFuncs[action.type](state, action) : state;
}
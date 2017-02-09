import {
  CHANGE_COURSE_LANGUAGE
} from '../actions/types';

const defaultState = {curLang:''};

const reducerFuncs = {
  [CHANGE_COURSE_LANGUAGE]: (state, action) => {
    const ret = Object.assign({...state}, {curLang: action.curLang})
    return ret;
  },
};

export default function(state = defaultState, action) {
  console.log(state, action);
  return reducerFuncs[action.type] ? reducerFuncs[action.type](state, action) : state;
}
import {
  CHANGE_COURSE_LANGUAGE,
  FETCH_COURSES_ACTION
} from '../actions/types';

const defaultState = {curLang:'', courseList:[]};

const reducerFuncs = {
  [CHANGE_COURSE_LANGUAGE]: (state, action) => {
    const ret = Object.assign({...state}, {curLang: action.curLang})
    return ret;
  },
  [FETCH_COURSES_ACTION]: (state, action) => {
    const courseList = action.promisePayload.data;
    const ret = Object.assign({...state}, {courseList:courseList});
    return ret;
  }
};

export default function(state = defaultState, action) {
  console.log(state, action);
  return reducerFuncs[action.type] ? reducerFuncs[action.type](state, action) : state;
}
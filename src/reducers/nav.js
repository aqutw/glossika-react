import {
  NAV_CLOSE, NAV_OPEN
} from '../actions/types';

const CLOSE = 'close';

const reducerFuncs = {
  [NAV_CLOSE]: (state) => {
    const ret = Object.assign({...state}, {navOpenClose: CLOSE})
    console.log(ret)
    return ret;
  },
  [NAV_OPEN]: (state) => {
    const ret = Object.assign({...state}, {navOpenClose: 'open'})
    console.log(ret)
    return ret;
  }
};

export default function(state = {navOpenClose:CLOSE}, action) {
  console.log(state, action);
  return reducerFuncs[action.type] ? reducerFuncs[action.type](state, action) : state;
}
import {
  NAV_CLOSE, NAV_OPEN
} from '../actions/types';

const reducerFuncs = {
  [NAV_CLOSE]: (state) => {
    return [...state, {navOpenClose: 'close'}]
  },
  [NAV_OPEN]: (state) => {
    return [...state, {navOpenClose: 'open'}]
  }
};

export default function(state = [], action) {
  return reducerFuncs[action.type](state, action) || state;
}
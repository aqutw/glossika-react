import { NAV_CLOSE, NAV_OPEN } from './types';

export function navOpen() {
  return {
    type: NAV_OPEN
  };
}

export function navClose() {
  return {
    type: NAV_CLOSE
  };
}
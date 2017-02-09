import { NAV_CLOSE, NAV_OPEN } from './types';

export function navOpenAction() {
  console.log('navOpenAction');
  return {
    type: NAV_OPEN
  };
}

export function navCloseAction() {
  return {
    type: NAV_CLOSE
  };
}
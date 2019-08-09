import { ICountAction } from './../types/count';

export function increaseCount(): ICountAction {
  return {
    type: 'INCREASE_COUNT',
  };
}

export function decreaseCount(): ICountAction {
  return {
    type: 'DECREASE_COUNT',
  };
}

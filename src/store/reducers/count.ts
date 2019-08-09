import { ICountState, ICountAction } from '../types/count';
const initialState: ICountState = {
  count: 1,
};

export function countReducer(state = initialState, action: ICountAction): ICountState {
  switch (action.type) {
    case 'INCREASE_COUNT':
      return {
        ...state,
        count: state.count + 1,
      };
    case 'DECREASE_COUNT':
      return {
        ...state,
        count: state.count - 1,
      };
    default:
      return state;
  }
}

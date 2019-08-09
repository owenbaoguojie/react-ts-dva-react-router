import { IChangeValueState, IChangeValueAction } from '../types/changeValues';
const initialState: IChangeValueState = {
  value: '1',
};

export function changeValueReducer(
  state: IChangeValueState = initialState,
  action: IChangeValueAction,
): IChangeValueState {
  switch (action.type) {
    case 'CHANGE_VALUE1':
      return {
        ...state,
        value: action.payload,
      };
    default:
      return state;
  }
}

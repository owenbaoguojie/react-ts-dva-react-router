import { IChangeValueAction } from '../types/changeValues';

export function ChangeValue1(value: string): IChangeValueAction {
  return {
    type: 'CHANGE_VALUE1',
    payload: value,
  };
}

export function ChangeValue2(value: string): IChangeValueAction {
  return {
    type: 'CHANGE_VALUE2',
    payload: value,
  };
}

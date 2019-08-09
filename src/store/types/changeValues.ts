export const CHANGE_VALUE1 = 'CHANGE_VALUE1';
export const CHANGE_VALUE2 = 'CHANGE_VALUE2';

export type IChangeValueState = {
  value: string;
};

export type IChangeValue1Action = {
  type: typeof CHANGE_VALUE1;
  payload: string;
};

export type IChangeValue2Action = {
  type: typeof CHANGE_VALUE2;
  payload: string;
};

export type IChangeValueAction = IChangeValue2Action | IChangeValue1Action;

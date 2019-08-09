export const INCREASE_COUNT = 'INCREASE_COUNT';
export const DECREASE_COUNT = 'DECREASE_COUNT';

export type ICountState = {
  count: number;
};

export type IIncreaseAction = {
  type: typeof INCREASE_COUNT;
};

export type IDecreaseAction = {
  type: typeof DECREASE_COUNT;
};

// export type IAsyncIncreaseAction = (
//   dispatch: any,
//   state: any,
// ) => {
//   type: typeof INCREASE_COUNT;
// };

export type ICountAction = IIncreaseAction | IDecreaseAction ;

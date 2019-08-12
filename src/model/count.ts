import { EffectsCommandMap } from 'dva';
const initialState = {
  count: 1,
};
const delay = (ms: number) => new Promise((res: any) => setTimeout(res, ms));
export default {
  namespace: 'count',
  state: initialState,
  reducers: {
    INCREASE_COUNT(state: typeof initialState, action: any) {
      return {
        count: state.count + 1,
      };
    },
    DECREASE_COUNT(state: typeof initialState, action: any) {
      return {
        count: state.count - 1,
      };
    },
  },
  effects: {
    *asyncIncrease(_: any, { call, put }: EffectsCommandMap) {
      yield delay(1000);
      yield put({
        type: 'INCREASE_COUNT',
      });
    },
  },
};

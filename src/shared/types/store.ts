import Counter from '@/model/count';
export type IGlobalStore = {
  count: typeof Counter.state;
};

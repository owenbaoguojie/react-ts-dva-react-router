import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IGlobalStore } from '@/shared/types/store';
// import { ChangeValue1 } from '@/store/actions/changeValues';
// import { IRootState } from '@/store/reducers';
// const Counter: React.SFC = () => {
//   const { count } = useSelector((state: IRootState) => state.countReducer);
//   const { value } = useSelector((state: IRootState) => state.changeValueReducer);
//   const dispatch = useDispatch();
//   function incrementCount() {
//     dispatch({ type: 'INCREASE_COUNT' });
//   }
//   function decrementCount() {
//     dispatch({ type: 'DECREASE_COUNT' });
//   }

//   function asyncIncrementCount() {
//     dispatch((dispatch: any, state: any) => {
//       setTimeout(incrementCount, 1000);
//     });
//   }

//   function changeValue(e: React.FormEvent<HTMLInputElement>) {
//     e.preventDefault();
//     dispatch(ChangeValue1(e.currentTarget.value));
//   }
//   return (
//     <div>
//       <h2>Counter:{count}</h2>
//       <button onClick={incrementCount}>+</button>
//       <button onClick={decrementCount}>-</button>
//       <button onClick={asyncIncrementCount}>async+</button>
//       <input type="text" onChange={changeValue} />
//       {value}
//     </div>
//   );
// };

const Counter: React.SFC = () => {
  const { count } = useSelector((state: IGlobalStore) => state.count);
  const { count } = useSelector((state: IGlobalStore) => state.count);
  const { count } = useSelector((state: IGlobalStore) => state.count);
  const { count } = useSelector((state: IGlobalStore) => state.count);
  const { count } = useSelector((state: IGlobalStore) => state.count);

  const dispatch = useDispatch();

  function incrementCount() {
    dispatch({ type: 'count/INCREASE_COUNT' });
  }
  function decrementCount() {
    dispatch({ type: 'count/DECREASE_COUNT' });
  }
  function asyncIncrementCount() {
    dispatch({ type: 'count/asyncIncrease' });
  }

  return (
    <div>
      <h2>Counter:{count}</h2>
      <button onClick={incrementCount}>+</button>
      <button onClick={decrementCount}>-</button>
      <button onClick={asyncIncrementCount}>async +</button>
    </div>
  );
};

export default Counter;

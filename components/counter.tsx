import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { increment, decrement, reset } from '../actions/actExample';
import { IExampleState } from '../interfaces/iExample/iExample.interfaces';

import { RootStateInterface } from '../interfaces/ifRootState';

const Counter: React.FC = () => {
  //const count = useSelector((state: RootStateInterface): number => state.rdcExample.count);
  const { count } = useSelector((state: RootStateInterface): IExampleState => state.rdcExample);
  const dispatch = useDispatch();

  const onIncrement = (): void => {
    dispatch(increment());
  };

  const onDecrement = (): void => {
    dispatch(decrement());
  };

  const onReset = (): void => {
    dispatch(reset());
  };

  return (
    <div>
      <style jsx>{`
        div {
          padding: 0 0 20px 0;
        }
      `}</style>
      <h1>
        Count: <span>{count}</span>
      </h1>
      <button onClick={onIncrement}>+1</button>
      <button onClick={onDecrement}>-1</button>
      <button onClick={onReset}>Reset</button>
    </div>
  );
};

export default Counter;

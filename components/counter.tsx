import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { increment, decrement, reset } from '../actions/actExample';
import { ExampleState } from '../interfaces';
import { RootStateInterface } from '../interfaces/ifRootState';

import Button from '@material-ui/core/Button';

const Counter: React.FC = () => {
  //const count = useSelector((state: RootStateInterface): number => state.rdcExample.count);
  const { count } = useSelector((state: RootStateInterface): ExampleState => state.rdcExample);
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
      <Button variant="contained" color="primary" onClick={onIncrement}>
        +1
      </Button>
      &nbsp;
      <Button variant="contained" color="secondary" onClick={onDecrement}>
        -1
      </Button>
      &nbsp;
      <Button variant="contained" color="default" onClick={onReset}>
        Reset
      </Button>
    </div>
  );
};

export default Counter;

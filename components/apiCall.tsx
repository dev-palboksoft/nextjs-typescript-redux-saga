import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actApiRequest, actApiInit, actApiSuccess, actApiFail } from '../actions/actApiExample';
import { IApiExampleState } from '../interfaces/iApiExample/iApiExample.interfaces';
import { RootStateInterface } from '../interfaces/ifRootState';

const ApiCall = () => {
  const dispatch = useDispatch();

  const { apiResult, error } = useSelector(
    (state: RootStateInterface): IApiExampleState => state.rdcApiExample,
  );

  React.useEffect(() => {
    if (apiResult) {
      alert('success');
    }
    if (error) {
      console.log(error);
      alert('error');
    }
  }, [apiResult, error]);

  const handleOnClick = () => {
    const min = 1;
    const max = 3;
    const ran: number = Math.floor(Math.random() * (max - min + 1)) + min;
    dispatch(actApiInit());
    dispatch(actApiRequest(ran));
  };

  const handleOnClick2 = () => {
    dispatch(actApiInit());
  };

  return (
    <div>
      <button onClick={handleOnClick}>Api Request</button>
      &nbsp;&nbsp;
      <button onClick={handleOnClick2}>init Api Request</button>
      <div>
        <pre>{apiResult !== null ? JSON.stringify(apiResult) : null}</pre>
      </div>
    </div>
  );
};

export default ApiCall;

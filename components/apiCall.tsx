import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actApiRequest, actApiInit, actApiSuccess, actApiFail } from '../actions/actApiExample';
import { ApiExampleState } from '../interfaces';
import { RootStateInterface } from '../interfaces/ifRootState';

import Button from '@material-ui/core/Button';

const ApiCall = () => {
  const dispatch = useDispatch();

  const { apiResult, error } = useSelector(
    (state: RootStateInterface): ApiExampleState => state.rdcApiExample,
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
      <Button variant="contained" color="primary" onClick={handleOnClick}>
        Api Request
      </Button>
      &nbsp;&nbsp;
      <Button variant="contained" color="secondary" onClick={handleOnClick2}>
        init Api Request
      </Button>
      <div>
        <pre>{apiResult !== null ? JSON.stringify(apiResult) : null}</pre>
      </div>
    </div>
  );
};

export default ApiCall;

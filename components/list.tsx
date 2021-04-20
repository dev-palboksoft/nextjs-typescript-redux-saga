import React from 'react';
import { IUser } from '../interfaces/iExample/iExample.interfaces';

interface ListParams {
  data: IUser;
}

const List: React.FC<ListParams> = ({ data }: ListParams) => {
  return (
    <div>
      {data.id} / {data.name} / {data.email}
    </div>
  );
};

export default List;

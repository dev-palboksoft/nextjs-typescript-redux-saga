import React from 'react';
import { User } from '../interfaces/ifExample/ifExample.interfaces';

interface ListParams {
  data: User;
}

const List: React.FC<ListParams> = ({ data }: ListParams) => {
  return (
    <div>
      {data.id} / {data.name} / {data.email}
    </div>
  );
};

export default List;

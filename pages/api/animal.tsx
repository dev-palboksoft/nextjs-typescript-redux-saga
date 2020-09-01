// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiRequest, NextApiResponse } from 'next';
import { ApiResult } from '../../interfaces/ifApiExample/ifApiExample.interfaces';

const Animals = (req: NextApiRequest, res: NextApiResponse<ApiResult[]>) => {
  const data = [
    { id: 1, name: '고양이' },
    { id: 2, name: '강아지' },
    { id: 3, name: '물고기' },
  ];
  // const body = JSON.parse(req.body);
  const id = req.body.id;
  const found = data.find((element) => element.id == id);

  if (req.method === 'POST') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(found));
  } else {
    res.statusCode = 404;
    res.end();
  }
};

export default Animals;

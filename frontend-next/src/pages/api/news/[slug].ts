import { NextApiRequest, NextApiResponse } from 'next';

const { news } = require('./data.json');

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log(req.query);
  const newsArticle = news.filter((item: any) => item.slug === req.query.slug);
  if (req.method === 'GET') {
    res.status(200).json(newsArticle);
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).json({ message: `Method ${req.method} is not allowed` });
  }
}

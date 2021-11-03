import { NextApiRequest, NextApiResponse } from 'next';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  // https://api.themoviedb.org/3/movie/latest?api_key=<<api_key>>&language=en-US
  const { category, monetization } = req.query;
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/latest?api_key=${process.env.MOVIES_API}&language=en-US`
  ).then((response) => response.json());
  console.log(data);
  res.status(200).json(data);
};
export default handler;

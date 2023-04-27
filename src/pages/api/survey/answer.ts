import { NextApiRequest, NextApiResponse } from 'next';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'POST') {
    res.status(405).json({ message: 'Invalid request method' });
    return;
  }

  // db logic...

  res.status(201).json({
    message: 'Survey submitted successfully!',
    data: null,
  });
};

export default handler;

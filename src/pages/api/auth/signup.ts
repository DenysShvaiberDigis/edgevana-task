import { generateId } from '@/helpers/common';
import { RegistrationValidator } from '@/validators';
import { NextApiRequest, NextApiResponse } from 'next';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'POST') {
    res.status(405).json({ message: 'Invalid request method' });
    return;
  }

  const authValidator = RegistrationValidator.validate(req.body);

  if (authValidator.error) {
    res.status(422).json({ message: 'Validation failed' });
    return;
  }

  // db logic...

  const { password, agreeToTerms, ...userData } = req.body as SignupInputs;

  res.status(201).json({
    message: 'User created!',
    data: { ...userData, id: generateId() },
  });
};

export default handler;

import { useContext } from 'react';
import { useRouter } from 'next/router';

import { UserContext } from '@/context/UserContext';

type RequireAuthProps = {
  children: React.ReactElement;
};

export const RequireAuth = ({ children }: RequireAuthProps) => {
  const router = useRouter();
  const { user } = useContext(UserContext);

  const redirect = () => {
    router.push('/sign-up')
  }

  if (!user) redirect();

  return children;
};

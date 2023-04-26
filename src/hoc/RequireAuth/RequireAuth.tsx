import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';

type RequireAuthProps = {
  children: React.ReactElement;
};

export const RequireAuth = ({ children }: RequireAuthProps) => {
  const router = useRouter();

  const { status } = useSession({
    required: true,
    onUnauthenticated() {
      router.push('/sign-up');
    },
  });

  if (status === 'loading') {
    return (
      <div className="flex justify-center items-center w-full h-screen">
        <h2>Loading...</h2>
      </div>
    );
  }

  return children;
};

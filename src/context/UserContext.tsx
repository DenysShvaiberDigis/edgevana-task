import { useRouter } from 'next/router';
import { createContext, useState } from 'react';

const initialState: UserContext = {
  user: null,
  login: () => {},
  logout: () => {},
};

export const UserContext = createContext(initialState);

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);

  const login = (user: User) => {
    setUser(user);
  }

  const logout = () => {
    setUser(null);
    router.push('/sign-up')
  }

  const value = { user, login, logout };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

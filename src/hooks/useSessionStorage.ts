import { useEffect, useState } from 'react';

const PREFIX = 'edgevana-';

export const useSessionStorage = (key: string, initialValue: any) => {
  const prefixedKey = PREFIX + key;

  const [value, setValue] = useState(() => {
    const item =
      typeof window !== 'undefined'
        ? window.sessionStorage.getItem(prefixedKey)
        : null;
    return item ? JSON.parse(item) : initialValue;
  });

  useEffect(() => {
    window.sessionStorage.setItem(prefixedKey, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};

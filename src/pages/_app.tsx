import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { SessionProvider } from 'next-auth/react';

import { RequireAuth } from '@/hoc';

interface CustomAppProps extends Omit<AppProps, 'Component'> {
  Component: AppProps['Component'] & { auth: boolean };
}

export default function App({ Component, pageProps }: CustomAppProps) {
  return (
    <SessionProvider session={pageProps.session}>
      {Component.auth ? (
        <RequireAuth>
          <Component {...pageProps} />
        </RequireAuth>
      ) : (
        <Component {...pageProps} />
      )}
    </SessionProvider>
  );
}

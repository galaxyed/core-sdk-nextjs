import React from 'react';
import type { AppProps } from 'next/app';
import { UserProvider } from '@icanid/icanid-sdk-nextjs/client';

export default function App({ Component, pageProps }: AppProps): React.ReactElement<AppProps> {
  const { user } = pageProps;

  return (
    <UserProvider user={user}>
      <Component {...pageProps} />
    </UserProvider>
  );
}

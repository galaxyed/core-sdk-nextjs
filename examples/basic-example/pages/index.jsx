import React from 'react';
import { useUser } from '@icanid/icanid-sdk-nextjs/client';

import Layout from '../components/layout';

export default function Home() {
  const { user, error, isLoading } = useUser();

  return (
    <Layout>
      <h1>Next.js SDK and ICANID Example</h1>

      {isLoading && <p>Loading login info...</p>}

      {error && (
        <>
          <h4>Error</h4>
          <pre>{error.message}</pre>
        </>
      )}

      {user && (
        <>
          <h4>Rendered user info on the client</h4>
          <pre data-testid="profile">{JSON.stringify(user, null, 2)}</pre>
        </>
      )}

      {!isLoading && !error && !user && (
        <>
          <p>
            To test the login click in <i>Login</i>
          </p>
          <p>
            Once you have logged in you should be able to click in <i>Protected Page</i> and <i>Logout</i>
          </p>
        </>
      )}
    </Layout>
  );
}

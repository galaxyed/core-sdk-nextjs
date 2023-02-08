import React from 'react';
import { withPageAuthRequired } from '@icanid/icanid-sdk-nextjs';
import { UserProfile } from '@icanid/icanid-sdk-nextjs/client';

import Layout from '../components/layout';

type ProfileProps = { user: UserProfile };

export default function Profile({ user }: ProfileProps): React.ReactElement {
  return (
    <Layout>
      <h1>Profile</h1>
      <h4>Profile (server rendered)</h4>
      <pre data-testid="profile">{JSON.stringify(user, null, 2)}</pre>
    </Layout>
  );
}

export const getServerSideProps = withPageAuthRequired();

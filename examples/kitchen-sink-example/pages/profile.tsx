import React from 'react';
import { withPageAuthRequired } from '@icanid/icanid-sdk-nextjs/client';

import Layout from '../components/layout';

export default withPageAuthRequired(function Profile({ user }) {
  return (
    <Layout>
      <h1>Profile</h1>
      <h4>Profile</h4>
      <pre data-testid="profile">{JSON.stringify(user, null, 2)}</pre>
    </Layout>
  );
});

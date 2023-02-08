import { headers } from 'next/headers';
import { getSession as icanidGetSession } from '@icanid/icanid-sdk-nextjs';
import { IncomingMessage, ServerResponse } from 'http';
import { Socket } from 'net';

// Note: This is an experiment to test that the SDK works in the experimental app directory.
// You should not rely on this code (or the app directory) in production.
const reqRes = () => {
  const req = new IncomingMessage(new Socket());
  headers().forEach((v, k) => {
    req.headers[k] = v;
  });
  const res = new ServerResponse(req);
  return { req, res };
};

export function getSession() {
  const { req, res } = reqRes();
  return icanidGetSession(req, res);
}

export default async function ExperimentalRscPage() {
  const session = await getSession();
  return (
    <div>
      <h1>Profile</h1>
      <h4>Profile</h4>
      <pre>{JSON.stringify(session || {}, null, 2)}</pre>
    </div>
  );
}

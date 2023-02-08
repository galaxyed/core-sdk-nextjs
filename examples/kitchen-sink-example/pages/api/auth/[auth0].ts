import { handleAuth } from '@icanid/icanid-sdk-nextjs';

export default handleAuth({
  onError(req, res, error) {
    console.error(error);
    res.status(error.status || 500).end('Check the console for the error');
  }
});

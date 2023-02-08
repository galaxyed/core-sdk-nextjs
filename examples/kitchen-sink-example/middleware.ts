import { withMiddlewareAuthRequired } from '@icanid/icanid-sdk-nextjs/edge';

export default withMiddlewareAuthRequired();

export const config = {
  matcher: ['/profile-mw', '/api/hello-world-mw']
};

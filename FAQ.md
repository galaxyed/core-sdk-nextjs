# Frequently Asked Questions

1. [Why do I get a `state mismatch` error when logging in from different tabs?](#1-why-do-i-get-a-state-mismatch-error-if-i-try-to-log-in-from-different-tabs)
2. [How can I reduce the cookie size?](#2-how-can-i-reduce-the-cookie-size)

## 1. Why do I get a `state mismatch` error if I try to log in from different tabs?

Every time you initiate login, the SDK stores in cookies some transient state (`nonce`, `state`, `code_verifier`) necessary to verify the callback request from Auth0. Initiating login concurrently from different tabs will result in that state being overwritten in each subsequent tab. Once the login is completed in some tab, the SDK will compare the state in the callback with the state stored in the cookies. As the cookies were overwritten, the values will not match (except for the tab that initiated login the last) and the SDK will return the `state mismatch` error.

For example:

1. Open Tab 1 to log in: stores some state in cookies.
2. Open Tab 2 to log in: stores its own state overwritting Tab 1 state.
3. Complete login on Tab 1: SDK finds Tab 2 state on the cookies and returns error.

**You should handle the error and prompt the user to log in again.** As they will have an active SSO session, they will not be asked to enter their credentials again and will be redirected back to your application.

## 2. How can I reduce the cookie size?

The SDK stores the session data in cookies. Since browsers reject cookies larger than 4 KB, the SDK breaks up lengthier sessions into multiple cookies. However, by default Node.js limits the header size to 16 KB (Node.js version <14 has a max size of 8kb).

If the session cookies are pushing the header size over the limit, **you have two options**:

- Use `-max-http-header-size` to increase Node's header size.
- Remove unused data from the session cookies.

For the latter, you can add an [afterCallback](https://auth0.github.io/nextjs-auth0/modules/handlers_callback.html#aftercallback) hook to remove unused claims from the user profile. Or set the [storeIDToken](https://auth0.github.io/nextjs-auth0/interfaces/config.sessionconfig.html#storeidtoken) config to `false`, if you do not require the ID Token.

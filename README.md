# JWT Server
Small application issuing JWT tokens for [Iconfinder API](https://developer.iconfinder.com/)

The Iconfinder API v3 requires authentication with JWT tokens, issued with your API application ID and secret. You can get them from your [profile page](https://www.iconfinder.com/account/applications). Set them as environment variables `CLIENT_ID` and `CLIENT_SECRET` and run the server with `node index.js`.
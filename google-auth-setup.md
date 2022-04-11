# Google Sign-In setup

## Usage

#### Create Application

The Google strategy authenticates users using their Google account.  Before your
application can make use of Google's authentication system, you must first
[register](https://support.google.com/cloud/answer/6158849) your app to use
OAuth 2.0 with Google APIs.  Once registered, a client ID and secret will be
issued which are used by Google to identify your app. To register, complete the
following steps:

1. Go to the [Google Cloud Platform console](https://console.cloud.google.com/).

2. From the projects list, select a project or create a new one.

3. Navigate to the APIs & Services page and select 
[Credentials](https://console.cloud.google.com/apis/credentials).

4. If you have an existing application, it will be listed under **OAuth 2.0
Client IDs**.  Click **Edit OAuth client** to obtain the client ID and secret,
and proceed to [configure the strategy](#configure-strategy).  Otherwise,
continue.

5. If you have not already done so, [configure](https://support.google.com/cloud/answer/10311615)
the [OAuth consent screen](https://console.cloud.google.com/apis/credentials/consent).
Select **External** to make your application available to any user with a Google
account.  Complete the app registration process by entering the app name,
support email and  developer contact info (email used to create API), application home page (redirect url -> `https://localhost:3000/auth/google/callback`),
application privacy policy link and application terms of service link (any page, e.g. https://neocomplexx.com/)
, authorized domains.

6. Click **Create Credentials**, then select **OAuth client ID**.

7. Select **Web application** as **Application type**.

8. Click **Add URI** under **Authorized Redirect URIs**.  Enter the URL of your
application's OAuth 2.0 redirect endpoint (`https://localhost:3000/auth/google/callback`).

9. Click **Create** to create the OAuth client.  The following screen will
display your client ID and secret. Proceed to [configure the strategy](#configure-strategy).

#### Configure Strategy

Once you've [registered your application](#register-application), the strategy
needs to be configured with your application's client ID and secret, along with
its OAuth 2.0 redirect endpoint.

The strategy takes a `verify` function as an argument, which accepts
`accessToken`, `refreshToken`, and `profile` as arguments.  `accessToken` and
`refreshToken` are used for API access, and are not needed for authentication.
`profile` contains the user's profile informationstored in their Google account.
When authenticating a user, this strategy uses
the OAuth 2.0 protocol to obtain this information via a sequence of redirects
and API requests to Google.

The `verify` function is responsible for determining the user to which the
Google account belongs.  In cases where the account is logging in for the
first time, a new user record is typically created automatically.  On subsequent
logins, the existing user record will be found via its relation to the Google
account.

Because the `verify` function is supplied by the application, the app is free to
use any database of its choosing.  The example below illustrates usage of a SQL
database.

1. Specify your app's client ID

Specify the client ID created for your app in the Google Developers Console on the `GOOGLE_CLIENT_ID` field of the .env file.

2. Specify your app's client secret

Specify the client secret created for your app in the Google Developers Console on the `GOOGLE_CLIENT_SECRET` field of the .env file.

### Configure Strategy

The `passport-google-web` strategy uses a simplified OAuth 2.0 flow, designed to be very easy to implement. Once the client side callback sends the `idToken` to the backend, the authentication is already complete. All that is required is for the backend to validate the token, to ensure it's not being forged. As such, there's every little required of the strategy, and no configuration options required.

## License

[The MIT License](http://opensource.org/licenses/MIT)

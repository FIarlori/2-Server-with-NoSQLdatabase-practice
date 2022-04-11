# Facebook sign-in setup

## Usage

#### Create an Application

Before your application can make use of Facebook's authentication system, you
 must register an application with Facebook. If you have not already done so
, a new application can be created at [Facebook Developers](https://developers.facebook.com/).
 Your application will be issued an app ID and app secret, which need to be
  provided to the strategy. You will also need to configure a redirect URI 
  which matches the route in your application.

#### Register Application

1. Go to http://developers.facebook.com and login with your Facebook account.

2. Once registered, select `Begin/ My apps`, then `Create App`.

3. Select `Business` as app type then `next`.

4. Complete `Display name` (app name), `App contact email` (facebook developer email) and select `Create App`.

5. Select the created app, then display `Settings` and select `Basic` option. The following screen will
display the app ID and app secret. On this screen complete `App domains` field (https://localhost:3000/auth/facebook/callback), `Privacy Policy URL` and `Terms of Service URL` (any page, e.g. https://neocomplexx.com/).

6. Also, on `Settings` -> `Basic` screen, select `Add Platform` then mark `Website` and add `Site URL` (https://localhost:3000/auth/facebook/callback).

7. Select `Add product` from left menu and then `set up` of `Facebook Login`. Add `Valid OAuth Redirect URIs` (https://localhost:3000/auth/facebook/callback).


#### Configure Strategy

The Facebook authentication strategy authenticates users using a Facebook
account and OAuth 2.0 tokens.  The app ID and secret obtained when creating an
application are supplied as options when creating the strategy. The strategy
also requires a `verify` callback, which receives the access token and optional
refresh token, as well as `profile` which contains the authenticated user's
Facebook profile.  The `verify` callback must call `cb` providing a user to
complete authentication.

1. Specify the app ID created for your app in the Facebook Developer page on the `FACEBOOK_CLIENT_ID` field of the .env file.

2. Specify the app secret created for your app in the Facebook Developer page on the `FACEBOOK_CLIENT_SECRET` field of the .env file.


## License

[The MIT License](http://opensource.org/licenses/MIT)


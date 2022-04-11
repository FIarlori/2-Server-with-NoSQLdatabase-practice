# Apple sign-in setup

Now with support for fetching the name and email!

⚠️ Important note: Apple will only provide you with the name and email *ONCE* which is when the user taps "Sign in with Apple" on your app the first time. Keep in mind that you have to store this in your database at this time! For every login after that, Apple will provide you with a unique ID that you can use to lookup the username in your database.

## Usage

#### Create Application

The Apple strategy authenticates users using their Apple account. Before
 your application can make use of Apple's authentication system, you
 must register an application with Apple. If you have not already done so
, a new application can be created at [Apple Developer](https://developer.apple.com/).
 Your application will have a client ID, team ID and key ID which need to be
  provided to the strategy. You will also need to configure a redirect URI 
  which matches the route in your application. In order to use this strategy,
 complete the following steps:

### Apple Developer Account configurations

1. Go to http://developer.apple.com and login with Apple account.

![ALT](Setup-images\google auth\1.png)
![Alt Text](Setup-images\google auth\{1}.{png})
![1](https://user-images.githubusercontent.com/77855553/162794376-9e90fb04-9dba-4cf3-9c36-9a29c5ed57f4.png)


2. Once registered, select `Certificates, Identifiers & profiles`.

3. In case there's no certificate loaded in `https://developer.apple.com/account/resources/certificates/list` proceed to generate one in order to continue with App ID creation (see example to generate cert on step 4.), else proceed to step 5.

4. Example to generate a certificate on Windows use `OpenSSL`.
Execute the following commands:
- `cd C:\Program Files\OpenSSL-Win64\bin`

- `openssl genrsa -out mykey.key 2048`

- `openssl req -new -key mykey.key -out CertificateSigningRequest.certSigningRequest -subj "/emailAddress=neo.test@neocomplexx.com.ar, CN=Neocomplexx, C=US"`

Select `+` icon next to Certificates, then select `Apple Development` option and in `Choose File` option search for `CertificateSigningRequest.certSigningRequest` file created at `C:\Program Files\OpenSSL-Win64\bin`.

### Create a new App ID

5. Select `Identifiers` then `+` icon. Choose `App ID` option then `App`. Complete `Description` field (app name -> Novus1), `Bundle ID` field (reverse domain type string -> .com.neocomplexx.Novus). Scroll down to `Capabilities`, find `Sign in with Apple`, check it, select `Edit` and make sure `Enable as a primary App ID` is selected.  Hit continue and then register.

### Create a services ID

6. Select `Identifiers` then `+` icon. Choose `Services ID`,complete `Description` field (Service name -> Novus login test 1), `Identifier` field (reverse domain type string -> .com.neocomplexx.novuslogintest1). Hit continue and select the created service from the list. Check `Sign in with Apple` box and select `Configure`. Make sure that the created App ID (Novus1) is selected in `Primary App ID` field. Add domain of redirect url in `Domain and Subdomains` field (mylocaladdr.com) and redirect url in `Return URLs` field (https://mylocaladdr.com:3000/auth/apple/callback) and hit next.

### Create a key

7. Select `Keys` then `+` icon. Complete `Key Name` field (app name -> Novus1), find `Sign in with Apple`, check it and select `Configure` option. Make sure that the created App ID (Novus1) is selected in `Primary App ID` field. Hit Save and then Download. Make sure you keep the file safe (save it in `apple-auth-key\` ) as you cannot redownload it once you have already downloaded it.

### Confige Strategy

8. Specify the client ID (on the `APPLE_CLIENT_ID` field of the .env file. This value is actually the `Service ID identifier` created in the Apple Developer page.

9. Specify the team ID on the `APPLE_TEAM_ID` field of the .env file. This is a 10 character code on the top left of the developer page next to your name.

10. Specify the key id on the `APPLE_KEY_ID` field of the .env file. This value is the identifier for the generated private key.

## License

[The MIT License](http://opensource.org/licenses/MIT)

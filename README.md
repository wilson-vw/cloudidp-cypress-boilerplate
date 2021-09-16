# CloudIDP 2FA Cypress Boilerplate

This repository serves the purpose of having a starting for developing E2E tests on an application that requires 2FA authentication.
This is tailor made to login into the CloudIDP login page. For a different page it might require changes on the `login` command (see `support/index.js`).

## Try me out
- `npm install`
- create a `.env` file in the root that is a duplication of the `example.env`
- replace the `.env` values
    - `USERNAME`: yours or the tech account user id;
    - `Password`: well... the password;
    - `OTP_SECRET`: find the text representation of the QR code that was scanned and copy the secret parameter
    - `BASE_URL`: the url of the application that is behind the _beautiful_ **VW Group Login** page
- run `npm run cypress:open`
- select the `sample.e2e.js` test
- Conquer the world!


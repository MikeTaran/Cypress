##User sign-in test case
###It should do login user:
1. Open `https://demo.realworld.io/`
2.Click `Sign in` link in app header
3. Url path should be `/#/login`
4. Page heading should be `Sign in`
5. Page should have form
6. Type `{email}` into **Email** form field
7. Type `{password}` into **Password** form field
8. Click on `Sign in` button
9. Header should contains `{username}`

**Where:**
* `{email}`
  * valid email
  * was registered before
* `{password}` — current user password
* `{username}` — registered user name for `{email}`
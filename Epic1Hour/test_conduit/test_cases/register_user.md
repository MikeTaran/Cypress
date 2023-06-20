## User sign-up test case
### It should do register user:
1. Open https://demo.realworld.io/
2. Click `Sign up` link in app header
3. Url path should be `/#/register`
4. Page heading should be `Sign up`
5. Page should have form
6. Type `{username}` into **Username** form field
7. Type `{email}` into **Email** form field
8. Type `{password}` into **Password** form field
9. Click on `Sign up` button
10. Header should contains `{username}`

**Where**:
* `{username}`
  * string with pattern `[0-9a-zA-Z_]{5, 10}`
  * was not registered before
* `{email}`
  * valid email
  * was not registered before
* `{password}` — string with pattern `[0-9a-zA-Z_]{6, 16}`
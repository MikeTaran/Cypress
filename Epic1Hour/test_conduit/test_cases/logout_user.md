##User Logout test case
###It should do logout user:
### Before
* repeate [1-9] steps from [login_user](/test_cases/login_user.md)
### Steps
1. Click `Settings` link in app header
2. Url path should be `/#/settings`
3. Page heading should be `Your Settings`
4. Click on `Or click here to logout.` button at the page bottom
5. Header should not contains `{username}`

### Where:
* `{username}` — name logged-in user
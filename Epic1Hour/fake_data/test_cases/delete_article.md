Delete article test case

# It should do delete article:

## Before
### Login
1. Open https://demo.realworld.io/
2. Repeat 2-9 from [login user](../../login_user.md)
3. Url should be `/#/` — home page

### Add article
4. Repeat 4-11 from [publish article](/test_cases/publish_article.md)

### Open me profile

5. Click `{user_name}` item in app header menu
6. Url should be `/#/@{user_name}/`

### Find my article

7. My article menu item should be visible
8. Click on article card with `{title}` in the list

### Delete article(1st way)

9. Click on **Delete Article** button at the top

### Check article has been deleted

10. My article list should not have article with `{title}`

### Delete article(2nd way)

11. Repeate 4-8
12. Click on **Delete Article** button at the bottom

### Check article has been deleted

10. My article list should not have article with `{title}`

# Where:

* `{title}` — article title
* `{user_name}` — name logged-in user chars
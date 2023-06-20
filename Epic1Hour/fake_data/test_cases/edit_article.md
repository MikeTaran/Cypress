Delete article test case

# It should do edit article:

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

### Edit article(1st way)

9. Click on **Edite Article** button at the top
10. Url should start from `/#/editor/`
11. Page should have form
12. Clear all form fields
13. Type `{new_title}` into **Title** form field
14. Type `{new_description}` into **Description** form field
15. Type `{new_body}` into **Body** form field
16. Type `{new_tags}` into **Tags** form field
17. Click on **Publish Article** button

### Check article

18. Url should be `/#/article/{slug}`
19. Page heading should be `{new_title}`
20. Article body should contain `{new_body}` rendered Markdown
21. Article should have `{new_tags}`

### Delete article(2nd way)

# Where:

* `{new_title}` — string with length from 20 to 30 chars
* `{new_description}` — string with length from 20 to 100 chars
* `{new_body}` — string in Markdown with length from 100 to 1000 chars
* `{new_tags}` — list keywords separated by comma
* `{slug}` — article url path address

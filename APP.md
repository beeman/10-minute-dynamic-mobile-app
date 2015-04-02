# Create APP with ionic

## Create the APP

### Scaffold Ionic App

    $ ionic start mobile-app sideMenu

### Start the app

    $ ionic serve --lab

### Design app logic

A logical flow through the data can be implemented in these screens.

    [Category list] -> [Product list] -> [Product detail]


### Remove routes and controller logic that are not needed

- Remove `app.search` and `app.browse` routes
- Clean up `AppCtrl`

### Remove screens that are not needed

- Remove `browse`, `login`, `search` templates
- Update `menu` template

### Use Playlist sample for categories

- create `categories` template
- create `categories` route
- create `categories` controller

And do the same for the other screens.

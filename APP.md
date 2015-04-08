# Create APP with ionic

Use ionic to create an app that shows categories and their products.

## Scaffold ionic app

    $ ionic start app sideMenu
    $ cd app

## Start the app

Preview the app in your browser

    $ ionic serve

Or show iOS and Android side by side

    $ ionic serve --lab

## Design app logic

A logical flow through the data can be implemented in these screens.

    [Category list] -> [Product list] -> [Product detail]

## Cleanup project

### Remove controller logic, routes and templates that are no longer needed

- Clean up `AppCtrl`
- Remove `browse` and `search` routes
- Remove `browse`, `login` and `search` templates
- Update links in `menu` template
- Update title in `menu` template

## Implement Category list

- create route `app.categories`
- update default route
- create template `categories.html`
- create controller `CategoriesCtrl`
- set `categories` variable on scope

## Implement Product list

- create route `app.category`
- create template `category.html`
- create controller `CategoryCtrl`
- set `category` variable on scope
- set `products` variable on scope

## Implement Product detail

- create route `app.product`
- create template `product.html`
- create controller `ProductCtrl`
- set `category` variable on scope
- set `product` variable on scope

## Clean up Playlist example code

- remove route `app.playlists` and `app.single`
- remove templates `playlist.html` and `playlists.html`


# Create API with loopback


Use loopback to create an API that serves the data of products and their categories.

## Model definition

|Model          |Property     |Type    |Req |
|---------------|-------------|--------|-----|
| **Category**	| id  	      | string | yes |
|        	      |	name        | string | yes |
|        	      |	description | string | yes |
|        	      |	image       | string | no  |
| **Product**	  | id          | string | yes |
|							  | categoryId  | string | yes |
|							  | name        | string | yes |
|							  | description | string | yes |
|        	      |	price	      | number | yes |
|							  | company     | string | no  |
|							  | image       | string | no  |

## Scaffold base project

    $ slc loopback mobile-api
    $ cd mobile-api

## Create Product and Category models

### Create models and add properties:

    $ slc loopback:model Category
    $ slc loopback:model Product

### Add additional properties:

	$ slc loopback:property

## Create model relations

	$ slc loopback:relation

|From      |Relation   |To        |Foreign key |
|----------|-----------|----------|------------|
| Category | hasMany   | Product  | categoryId |
| Product  | belongsTo | Category | categoryId |

## Start the server

	$ nodemon server/server.js

Some URL's to explore:

- [http://localhost:3000/](http://localhost:3000/)
- [Categories endpoint](http://localhost:3000/api/categories) or [count](http://localhost:3000/api/categories/count)
- [Products endpoint](http://localhost:3000/api/products) or [count](http://localhost:3000/api/products/count)

## Dataset

### Manually adding data

Go to the [API Explorer (based on swagger)](http://localhost:3000/explorer)
and add the objects manually.

### Automatically generating data

Add [`faker.js`](https://github.com/marak/Faker.js/) to the project.

    $ npm install faker --save

Copy [`init-data.js`](mobile-api/server/boot/init-data.js) to `server/boot` and restart the server.

    $ cp init-data.js server/boot

## Querying the data

### Product price less than 100

####   [`?filter[where][price][lt]=100`](http://localhost:3000/api/products/?filter[where][price][lt]=100)

### Sorted by descending price

####  [`&filter[order]=price%20desc`](http://localhost:3000/api/products/?filter[where][price][lt]=100&filter[order]=price%20desc)

### Show only the first five

####  [`&filter[limit]=3`](http://localhost:3000/api/products/?filter[where][price][lt]=100&filter[order]=price%20desc&filter[limit]=3)

## Read more
### Official documentation on [creating]([Looback documentation](http://docs.strongloop.com/display/public/LB/Creating+models), [customizing](http://docs.strongloop.com/display/public/LB/Customizing+models) and [relating](http://docs.strongloop.com/display/public/LB/Creating+model+relations) models and [filtering](http://docs.strongloop.com/display/public/LB/Querying+data) data.

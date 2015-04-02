
# Create API with loopback

### Scaffold Loopback API

    $ slc loopback mobile-api
    $ cd mobile-api

### Create Product and Category models

    $ slc loopback:model Category
    $ slc loopback:model Product

|Model          |Property     |Type    |Reqd |
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

### Create additional model properties

	$ slc loopback:property

### Create model relations

	$ slc loopback:relation

|From      |Relation |To       |
|----------|---------|---------|
| Category | hasMany | Product |

### Start the server

	$ nodemon server/server.js

Some URL's to explore:

- [http://localhost:3000/](http://localhost:3000/)
- [Categories endpoint](http://localhost:3000/api/categories) or [count](http://localhost:3000/api/categories/count)
- [Products endpoint](http://localhost:3000/api/products) or [count](http://localhost:3000/api/products/count)

### Initial dataset

#### Manually

Go to the [API Explorer (based on swagger)](http://localhost:3000/explorer)
and add the objects manually.

#### Automatically

Add [`faker.js`](https://github.com/marak/Faker.js/) to the project.

    $ npm install faker --save

Copy [`init-data.js`](./init-data.js) to `server/boot` and restart the server.

    $ cp init-data.js server/boot

##### Product price < 100

[`?filter[where][price][lt]=100`](http://localhost:3000/api/products/?filter[where][price][lt]=100)

##### Sorted by descending price

[`&filter[order]=price%20desc`](http://localhost:3000/api/products/?filter[where][price][lt]=100&filter[order]=price%20desc)

##### Show only the first five

[`&filter[limit]=3`](http://localhost:3000/api/products/?filter[where][price][lt]=100&filter[order]=price%20desc&filter[limit]=3)

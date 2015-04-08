
# Create API with loopback

Use loopback to create an API that serves the data of products and their categories.

## Datasources

> LoopBack models connect to backend systems such as databases via data sources that provide create, retrieve, update, and delete (CRUD) functions. LoopBack also generalizes other backend services, such as REST APIs, SOAP web services, and storage services, and so on, as data sources. <sup>[(Source)](http://docs.strongloop.com/display/public/LB/Connecting+models+to+data+sources)</sup>

LoopBack provides connectors for the following databases:

- Memory (default)
- MongoDB
- MySQL
- Oracle
- PostgreSQL
- Redis
- SQL Server
- [Elasticsearch](https://github.com/strongloop-community/loopback-connector-elastic-search) (Community project)

## Models

> A LoopBack model represents data in backend systems such as databases, and by default has both Node and REST APIs.  Additionally, you can add functionality such as validation rules and business logic to models <sup>[(Source)](http://docs.strongloop.com/display/public/LB/Defining+models)</sup>

## Model definition

|Name           |Property     |Type    |Req |
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

## Model relations

|From      |Relation   |To        |Foreign key |
|----------|-----------|----------|------------|
| Category | hasMany   | Product  | categoryId |
| Product  | belongsTo | Category | categoryId |

## Scaffold base project

    $ slc loopback api
    $ cd api

## Create Product and Category models

### Create models and add properties:

    $ slc loopback:model Category
    $ slc loopback:model Product

### Add additional properties:

	$ slc loopback:property

## Create model relations

	$ slc loopback:relation

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

Copy [`init-data.js`](api/server/boot/init-data.js) to `server/boot` and restart the server.

    $ cp init-data.js server/boot

## Querying the data

### Product price less than 100

####   [`?filter[where][price][lt]=100`](http://localhost:3000/api/products/?filter[where][price][lt]=100)

### Sorted by descending price

####  [`&filter[order]=price%20desc`](http://localhost:3000/api/products/?filter[where][price][lt]=100&filter[order]=price%20desc)

### Show only the first five

####  [`&filter[limit]=5`](http://localhost:3000/api/products/?filter[where][price][lt]=100&filter[order]=price%20desc&filter[limit]=5)

## Read more
### Official documentation on [creating](http://docs.strongloop.com/display/public/LB/Creating+models), [customizing](http://docs.strongloop.com/display/public/LB/Customizing+models) and [relating](http://docs.strongloop.com/display/public/LB/Creating+model+relations) models and [filtering](http://docs.strongloop.com/display/public/LB/Querying+data) data.

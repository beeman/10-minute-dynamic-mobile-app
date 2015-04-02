module.exports = function(app) {

  // This helps us fake the data
  var faker = require('faker');

  // Load the models
  var Category = app.models.Category;
  var Product = app.models.Product;

  // Get max number of categories
  var maxCategories = process.env.MAX_CATEGORIES || 9;
  var maxProducts = process.env.MAX_PRODUCTS || 90;
  var minProducts = process.env.MIN_PRODUCTS || 10;

  // Create maxCategories number of Categories
  for(var i = 0; i < maxCategories; i++) {

    // Define new Category
    var newCategory = {
      name: faker.company.catchPhrase(),
      description: faker.lorem.sentence(),
      image: faker.image.image()
    }

    // Create the Category
    Category.create(newCategory, function(err, createdCategory){
      if(err) console.log(err);

      // Get the ID of the parent Category
      var categoryId = createdCategory.id;

      // Get random number between 1 and maxProducts number of Products
      var numOfProducts = Math.floor(Math.random() * maxProducts) + minProducts;

      // Create numOfProducts
      for(var j = 0; j < numOfProducts; j++) {

        // Define new Product
        var newProduct = {
          categoryId: categoryId,
          name: faker.company.catchPhrase(),
          description: faker.lorem.sentence(),
          company: faker.company.companyName(),
          price: faker.finance.amount(),
          image: faker.image.image()
        }

        // Create the Product
        Product.create(newProduct, function(err){
          if(err) console.log(err);
        });
      }

      // Log it
      console.log('Category', categoryId, 'has', numOfProducts, 'Products');

    });
  }

};

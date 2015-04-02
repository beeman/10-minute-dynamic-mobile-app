# Create the SDK

Loopback offers a way to generate an AngularJS SDK based on your API.

## Create and implement loopback SDK

### Generate the SDK

    $ lb-ng mobile-api/server/server.js mobile-app/www/lib/lb-services.js

### Add SDK and its dependency

Add the following code to `www/index.html`, above the link to app.js.

    <!-- Loopback Angular SDK -->
    <script src="lib/ionic/js/angular/angular-resource.min.js"></script>
    <script src="lib/lb-services.js"></script>

### Load SDK in Angular application

Add `'lbServices'` to the starter module in `app.js`.  


## Refactor controllers to use SDK

Inject Category and Product in our controllers.

Get all the Categories

    $scope.categories = Category.find();

Get one Category or Product

    $scope.category = Category.findOne($stateParams.categoryId);

    $scope.product = Product.findOne($stateParams.productId);

Get Products in one Category

    $scope.products = Product.find({
      filter: { where: { categoryId: $stateParams.categoryId } }
    });

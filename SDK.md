# Create the SDK

Loopback offers a way to generate an AngularJS SDK based on your API.

## Create and implement loopback SDK

### Generate the SDK

    $ lb-ng api/server/server.js app/www/lib/lb-services.js

### Add SDK and its dependency

Add the following code to `www/index.html`, above the link to app.js.

    <!-- Loopback Angular SDK -->
    <script src="lib/ionic/js/angular/angular-resource.min.js"></script>
    <script src="lib/lb-services.js"></script>

### Load SDK in Angular application

Add `'lbServices'` to the starter module in `app.js`.  


## Refactor controllers to use SDK

Inject Category and Product in our controllers.

Find all the Categories

    $scope.categories = Category.find();

Find a Category or Product by ID

    $scope.category = Category.findById({ id: $stateParams.categoryId });
    $scope.product = Product.findById({ id: $stateParams.productId });

Find Products in one Category

    $scope.products = Category.products({ id: $stateParams.categoryId });

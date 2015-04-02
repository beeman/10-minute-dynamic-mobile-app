angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope) {

})

.controller('CategoriesCtrl', function($scope, Category) {
  $scope.categories = Category.find();
})

.controller('CategoryCtrl', function($scope, $stateParams, Category){
  $scope.category = Category.findById({ id: $stateParams.categoryId });
  $scope.products = Category.products({ id: $stateParams.categoryId });
})

.controller('ProductCtrl', function($scope, $stateParams, Category, Product){
  $scope.category = Category.findById({ id: $stateParams.categoryId });
  $scope.product = Product.findById({ id: $stateParams.productId });
})

;

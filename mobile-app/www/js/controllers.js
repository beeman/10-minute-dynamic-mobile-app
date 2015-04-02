angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope) {

})

.controller('CategoriesCtrl', function($scope, Category) {
  $scope.categories = Category.find();
})

.controller('CategoryCtrl', function($scope, $stateParams, Category, Product){
  $scope.category = Category.findOne($stateParams.categoryId);
  $scope.products = Product.find({
    filter: { where: { categoryId: $stateParams.categoryId } }
  });
})

.controller('ProductCtrl', function($scope, $stateParams, Category, Product){
  $scope.category = Category.findOne($stateParams.categoryId);
  $scope.product = Product.findOne($stateParams.productId);
})

;

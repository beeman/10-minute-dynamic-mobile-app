angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope) {

})

.controller('CategoriesCtrl', function($scope) {
  $scope.categories = [
    { id: 1, name: 'Cat 1'},
    { id: 2, name: 'Cat 2'},
    { id: 3, name: 'Cat 3'},
    { id: 4, name: 'Cat 4'},
  ];
})

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
});

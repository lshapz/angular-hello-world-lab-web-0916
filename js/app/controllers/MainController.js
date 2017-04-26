function MainController($scope) {
  $scope.name = 'Laura!';
  $scope.email = 'likeaduck@gmail.com';
  $scope.phone = '917-783-5232';
}

angular
  .module('app')
  .controller('MainController', MainController);
  
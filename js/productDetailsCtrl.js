angular.module('assessment')
.controller('productDetailsCtrl', function($scope, shopService, $stateParams){
  var promise = shopService.getProduct($stateParams.id);

  promise.then(function(results){
    $scope.products = results.data;
  })

})

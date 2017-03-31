angular.module('assessment')
.controller('shopCtrl', function($scope, shopService){

  $scope.getProducts = function(){
    var promise = shopService.getProducts();
    promise.then(function(results){
        $scope.products = results.data;
        console.log(results);
})
}
    $scope.getProducts();

    $scope.getProduct = function(id){
      var promise = shopService.getProduct(id);
      promise.then(function(results) {
      $scope.product = results.data;
      })
    }
});

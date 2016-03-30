
stocks.controller('TradeCtrl', ['$scope', '$stateParams', 'PortfolioService', function($scope, $stateParams, 'PortfolioService') {

  console.log($stateParams);

  $scope.formData = {
    symbol: 'CSCO',
    direction: "Buy",
    price: 33.22,
    quantity: 100,
    date: new Date(),
  };


  $scope.handleForm = function(){
    console.log('tetris');
  };

}]);

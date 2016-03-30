
stocks.controller('TransactionCtrl', ['$scope', '$stateParams', 'PortfolioService', function($scope, $stateParams, PortfolioService) {

  $scope.symbolFilter = ''
  $scope.transactions =  PortfolioService.getTransactions();
}]);


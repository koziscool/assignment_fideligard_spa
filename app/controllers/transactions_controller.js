
stocks.controller('TransactionCtrl', ['$scope', '$stateParams', 'PortfolioService', function($scope, $stateParams, PortfolioService) {

  $scope.transactions =  PortfolioService.getTransactions();
}]);


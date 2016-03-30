stocks.controller('PortfolioCtrl', ['$scope', '$stateParams', 'PortfolioService', function($scope, $stateParams, PortfolioService) {

  $scope.summary = PortfolioService.getSummary();
  $scope.portfolio = PortfolioService.getPortfolio();

}]);

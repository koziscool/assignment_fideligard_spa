stocks.controller('TradeCtrl', ['$scope', '$stateParams', function($scope, $stateParams) {

  // console.log($('#dateSlider').val());
  console.log($stateParams);

  $scope.handleForm = function(){
    console.log('tetris');
  };

}]);

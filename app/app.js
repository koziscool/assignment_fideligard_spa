var stocks = angular.module('stocks', ['ui.router']);

stocks.config(function($stateProvider, $urlRouterProvider) {

 /// config here
  $urlRouterProvider.otherwise('/stocks');

  $stateProvider

  .state( 'stocks', {
    url: '/stocks',
    controller: 'StocksCtrl',
    templateUrl: '/app/templates/stocks.html',
    // views: {
    //   'slider@stocks': {
    //     templateUrl: '/app/templates/stocks/slider.html',
    //     controller: 'SliderCtrl'
    //   },
    //   'stocksWindow@stocks': {
    //     templateUrl:'/app/templates/stocks/stocksWindow.html',
    //     controller: 'StocksWindowCtrl'
    //   },
    // }
  })

 .state('stocks.portfolio', {
    url: '/portfolio',
    controller: 'PortfolioCtrl',
    templateUrl: "/app/templates/portfolio.html",
 })

 .state( 'stocks.trade', {
    url: '/trade/{symbol}',
    controller: 'TradeCtrl',
    templateUrl: "/app/templates/trade.html"
 })

 .state( 'stocks.transactions', {
    url: '/transactions',
    controller: 'TransactionCtrl',
    templateUrl: "/app/templates/transactions.html"
 });


});



stocks.factory('PortfolioService', ['DataService', function(DataService) {

  function date_by_subtracting_days(date, days) {
    return new Date(
        date.getFullYear(),
        date.getMonth(),
        date.getDate() - days,
        date.getHours(),
        date.getMinutes(),
        date.getSeconds(),
        date.getMilliseconds()
        );
  };

  var PortfolioService = {}; 

  var symbols = DataService.getSymbols();
  var transactions = [];
  var initialCash = 1000000;
  var position = {
    cash: initialCash,
    stockPositions: []
  };

  var date1 = date_by_subtracting_days( new Date(), 41 );
  var transaction1 = {
    date: date1,
    symbol: 'CSCO',
    direction: 'Buy',
    quantity: '300',
    price: 27.77
  }

  var date2 = date_by_subtracting_days( new Date(), 41 );
  var transaction2 = {
    date: date1,
    symbol: 'GOOG',
    direction: 'Buy',
    quantity: '100',
    price: 711.11
  }

  var date3 = date_by_subtracting_days( new Date(), 41 );
  var transaction3 = {
    date: date1,
    symbol: 'INTC',
    direction: 'Buy',
    quantity: '600',
    price: 31.99
  }

  var date4 = date_by_subtracting_days( new Date(), 41 );
  var transaction4 = {
    date: date1,
    symbol: 'CSCO',
    direction: 'Sell',
    quantity: '100',
    price: 28.12
  }

  transactions.push( transaction1 );
  transactions.push( transaction2 );
  transactions.push( transaction3 );
  transactions.push( transaction4 );

  PortfolioService.getTransactions = function() {
    return transactions;
  };  



  return PortfolioService;

}]);

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
  

  var summary = {
    costBasis: 128345,
    currentValue: 112345,
    profitLoss: -10000,
    oneDay: 1235,
    sevenDay: 13432,
    thirtyDay: 16434
  };

  PortfolioService.getSummary = function() {
    return summary;
  }; 


////////
  var initialCash = 1000000;
  var cashPostion = {
    symbol: 'CASH',
    quantity: initialCash,
    costBasis: initialCash,
    currentValue: initialCash,
    profitLoss: 0,
    currentPrice: 1.00,
    oneDay: 0,
    sevenDay: 0,
    thirtyDay: 0
  };

  var postion1 = {
    symbol: 'AAPL',
    quantity: 1400,
    costBasis: 8345,
    currentValue: 12345,
    profitLoss: 4000,
    currentPrice: 123.45,
    oneDay: 1.45,
    sevenDay: -2.12,
    thirtyDay: -2.32
  };

  var postion2 = {
    symbol: 'BAC',
    quantity: 1400,
    costBasis: 8345,
    currentValue: 12345,
    profitLoss: 4000,
    currentPrice: 123.45,
    oneDay: 1.45,
    sevenDay: -2.12,
    thirtyDay: -2.32
  };

  var postion3 = {
    symbol: 'CPL',
    quantity: 1400,
    costBasis: 8345,
    currentValue: 12345,
    profitLoss: 4000,
    currentPrice: 123.45,
    oneDay: 1.45,
    sevenDay: -2.12,
    thirtyDay: -2.32
  };

  var postion4 = {
    symbol: 'AAA',
    quantity: 1400,
    costBasis: 8345,
    currentValue: 12345,
    profitLoss: 4000,
    currentPrice: 123.45,
    oneDay: 1.45,
    sevenDay: -2.12,
    thirtyDay: -2.32
  };

  var postion5 = {
    symbol: 'ABC',
    quantity: 1400,
    costBasis: 8345,
    currentValue: 12345,
    profitLoss: 4000,
    currentPrice: 123.45,
    oneDay: 1.45,
    sevenDay: -2.12,
    thirtyDay: -2.32
  };

  var postion6 = {
    symbol: 'ABC',
    quantity: 1400,
    costBasis: 8345,
    currentValue: 12345,
    profitLoss: 4000,
    currentPrice: 123.45,
    oneDay: 1.45,
    sevenDay: -2.12,
    thirtyDay: -2.32
  };

  var postion7 = {
    symbol: 'ABC',
    quantity: 1400,
    costBasis: 8345,
    currentValue: 12345,
    profitLoss: 4000,
    currentPrice: 123.45,
    oneDay: 1.45,
    sevenDay: -2.12,
    thirtyDay: -2.32
  };

  var postion8 = {
    symbol: 'ABC',
    quantity: 1400,
    costBasis: 8345,
    currentValue: 12345,
    profitLoss: 4000,
    currentPrice: 123.45,
    oneDay: 1.45,
    sevenDay: -2.12,
    thirtyDay: -2.32
  };



  var portfolio = [];
  portfolio.push( cashPostion );
  portfolio.push( postion1 );
  portfolio.push( postion2 );
  portfolio.push( postion3 );
  portfolio.push( postion4 );
  portfolio.push( postion5 );
  portfolio.push( postion6 );
  portfolio.push( postion7 );
  portfolio.push( postion8 );

  PortfolioService.getPortfolio = function() {
    return portfolio;
  };  

/////
  var transactions = [];
  var date1 = date_by_subtracting_days( new Date(), 41 );
  var transaction1 = {
    date: date1,
    symbol: 'CSCO',
    direction: 'Buy',
    quantity: '300',
    price: 27.77
  }

  var date2 = date_by_subtracting_days( new Date(), 35 );
  var transaction2 = {
    date: date2,
    symbol: 'GOOG',
    direction: 'Buy',
    quantity: '100',
    price: 711.11
  }

  var date3 = date_by_subtracting_days( new Date(), 19 );
  var transaction3 = {
    date: date3,
    symbol: 'INTC',
    direction: 'Buy',
    quantity: '600',
    price: 31.99
  }

  var date4 = date_by_subtracting_days( new Date(), 11 );
  var transaction4 = {
    date: date4,
    symbol: 'CSCO',
    direction: 'Sell',
    quantity: '100',
    price: 28.12
  }

  transactions.push( transaction4 );
  transactions.push( transaction3 );
  transactions.push( transaction2 );
  transactions.push( transaction1 );
/////

  PortfolioService.getTransactions = function() {
    return transactions;
  };  



  return PortfolioService;

}]);
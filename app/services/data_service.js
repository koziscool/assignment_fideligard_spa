stocks.factory('DataService', ['$http', function($http) {

  var DataService = {};
  var stocks = [];
  var testLength = 3;
  var testSymbols = ['MSFT', 'INTC', 'AAPL', 'ORCL', 'MMM', 
          'NFLX', 'NVDA', 'TSLA', 'BIDU', 'CSCO', 'EBAY', 'GOOG' ];
  var testPrice = [ 30.01, 18.22, 21.31];
  var testNames = ['Microsoft', 'Intel', 'Oracle'];
  var historicalData = {};

  DataService.createStock = function(index) {
    var stock = {};
    stock.symbol = testSymbols[index];
    stock.name = testNames[index];
    stock.price = testPrice[index];
    stocks.push( stock );
  };

  DataService.getStocks = function() {
    return stocks;
  };

  DataService.getSymbols = function() {
    return testSymbols;
  };  

  DataService.setupPortfolio = function() {
    if (stocks.length === 0) {
      for(var i = 0; i < testLength; i++) {
        DataService.createStock(i);
      }
    }
  };

  DataService.initializeHistoricalData = function() {
    testSymbols.forEach( function(sym){
      historicalData[sym] = {};
    });
    console.log('im here hist data');
   //  var loginString = "http://api.kibot.com/?action=login&user=guest&password=guest";
    
   //  var loginObj = {
   //    method: "GET",
   //    url: loginString
   //  };

   // $http(loginObj).then( function(response) {
   //      console.log('got login');
   //  });

   //  var urlString = "http://api.kibot.com/";
   //  var apiOptions = {
   //    "action": "history",
   //    "symbol": "MSFT",
   //    "interval": "daily",
   //    "period": "365"
   //  };

   //  var optionsString = "?";
   //  for (var key in apiOptions) {
   //    optionsString = optionsString + key + "=" + apiOptions[key] + "&";
   //  }


   //  console.log(optionsString);
   //  var queryString = urlString + optionsString;
   //  console.log(queryString);

   //  var queryString = "https://www.quandl.com/api/v3/datasets/WIKI/AAPL.json"
   //  var queryObj = {
   //    method: "GET",
   //    url: queryString
   //  };

   // $http(queryObj)
   //  .then(function(response) {
   //      console.log('got response');
   //      console.log(response);
   //  });

    console.log(historicalData);
  };

  DataService.getHistoricalData = function() {
    // if (stocks.length === 0) {
    //   for(var i = 0; i < testLength; i++) {
    //     DataService.createStock(i);
    //   }
    // }
  };

  DataService.setupPortfolio();

  return DataService;
}]);


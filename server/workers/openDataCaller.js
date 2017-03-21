var request = require('request');
var db = require('../models/crime');

request('https://data.sfgov.org/resource/9v2m-8wqu.json', function(err, res, body) {
  if (err) {
    console.log(err);
  } else {
    db.clearDatabase(function(err) {
      var results = JSON.parse(body);
      db.storeOpenData(results, function(err) {
        if (err) {
          console.error(err);
        }
      });
    });
  }
});


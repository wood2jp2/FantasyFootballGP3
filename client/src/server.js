const
  express = require('express'),
  mongoose = require('mongoose'),
  bodyParser = require('body-parser'),
  request = require('request'),
  cheerio = require('cheerio'),
  localServer = "mongodb://localhost:27017/InjuryScrape1",
  port = process.env.PORT || 3000,
  InjuryUpdate = require('./MongoSearch/model/InjuryUpdate.js'),
  app = express(),
  db = mongoose.connection,
  getTwitter = require('./TwitterScrape/twitterScrape');

mongoose.promise = Promise;

getTwitter.getTwitter();

app.use(bodyParser.urlencoded({
  extended: false
}));

app.use(express.static("public"));

// test scraping link, from what I understand, this temporarily hosts your mongoose connection
mongoose.connect(localServer, {
  useMongoClient: true
});

app.listen(port, function() {
  console.log('App running on port 3000')
});

app.get('/scrape', function(req, res) {
  console.log('scrape scrape');
  request('http://www.espn.com/nfl/injuries', function(err, res, html) {
    const $ = cheerio.load(html);
    $('.oddrow,.evenrow').each(function(i, element) {
      var result = {};
      if (i % 2 === 0) {
        result.name=$(this).find('a').text();
        positionIsolation=$(this).find('td:first-of-type').text().split(' ');
        result.position=positionIsolation[positionIsolation.length-1];
        result.status=$(this).find('td:nth-child(2)').text();
        result.date=$(this).find('td:last-child').text();

        var entry = new InjuryUpdate(result);

        entry.save(function(err, doc) {
          if (err) {
            console.log(err)
          } else {
            console.log(doc)
          }
        });
      }

    });
  });
  res.send('scrape complete')
})

const
  Twitter = require('twitter'),
  twitterKeys = require('./keys').twitterKeys;

module.exports = {
    client: new Twitter(twitterKeys),
    params: {
      screen_name: 'matthewberrytmr',
      count: 20
    },
    getTwitter: function() {
      this.client.get('statuses/user_timeline', this.params, function(err, tweets, res) {
      if (!err && res.statusCode === 200) {
        const twitterScrape = {
          allTweets: []
        };
        for (let i=0; i < 20; i++) {
          twitterScrape.allTweets.push(tweets[i].text);
        }
      } else {
        console.log(err);
      }
    })
  }
}

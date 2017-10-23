const
  Twitter = require('twitter'),
  twitterKeys = require('./keys').twitterKeys,
  client = new Twitter(twitterKeys),
  params = {
    screen_name: 'matthewberrytmr',
    count: 20
  };

module.exports = {
    getTwitter: function() {
      client.get('statuses/user_timeline', params, function(err, tweets, res) {
      if (!err && res.statusCode === 200) {
        for (let i=0; i < 20; i++) {
          console.log(tweets[i].text);
        }
      } else {
        console.log(err)
      }
    })
  }
}

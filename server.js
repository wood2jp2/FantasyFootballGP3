const
  express = require('express'),
  app = express(),
  passport = require('passport'),
  session = require('express-session'),
  bodyParser = require('body-parser'),
  env = require('dotenv').load(),
  exphbs = require('express-handlebars'),
  nodemailer = require('nodemailer'),
  mongoose = require('mongoose'),
  request = require('request'),
  cheerio = require('cheerio'),
  sequelize = require('sequelize'),
  localServer = "mongodb://localhost:27017/InjuryScrape2",
  Twitter = require('twitter'),
  twitterKeys = require('./app/TwitterScrape/keys').twitterKeys,
  port = process.env.PORT || 3001;

// create reusable transporter object using the default SMTP transport
var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'GWFantasyFootballApp@gmail.com',
    pass: 'gwfantasy'
  }
});

//For BodyParser
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

app.use(express.static('./app/views'));

// For Passport
app.use(session({
  secret: 'keyboard cat',
  resave: true,
  saveUninitialized: true
})); // session secret
app.use(passport.initialize());

app.use(passport.session()); // persistent login sessions

//For Handlebars
app.set('views', './app/views')
app.engine('html', exphbs({
  extname: '.html'
}));
app.set('view engine', '.html');

//Models
const models = require("./app/models");

//load passport strategies
require('./app/config/passport/passport.js')(passport, models.user);

app.get('/fml', (req, res) => {
  console.log(req.isAuthenticated());
  res.send({'lmao': 'fml'});
});

let client = new Twitter(twitterKeys);

app.get('/twitterScrape', (req, res) => {
  let params= {
    screen_name: 'matthewberrytmr',
    count: 20
  };
  client.get('statuses/user_timeline', params, function(err, tweets, resp) {
    res.send(tweets);
  });
});

app.post('/signup', passport.authenticate('local-signup'), (req, res) => {
  res.send('/welcome');
  var mailOptions = {
      from: 'GWFantasyFootballApp@gmail.com', // sender address
      to: `${req.body.email}`, // list of receivers
      subject: 'Thanks for signing up!', // Subject line
      text: `Thank you for signing up to FantasyFootballGP3, ${req.body.firstname}`, // plaintext body
      html: `Thank you for signing up to FantasyFootballGP3, ${req.body.firstname}! \
            Please feel free to explore our app and let us know if there's anything \
            we can further do to enhance your user experience! \
            Thank you from the team at FantasyFootballGP3.` // html body
  };
  transporter.sendMail(mailOptions, (error, info) => {
      if(error){
          return console.log(error);
      }
      console.log('Message sent: ' + info.response);
  });
});

app.get('/', (req, res) => {
  res.redirect('/signin')
});

app.post('/signin', passport.authenticate('local-signin'), (req, res) => {
  res.send(req.body);
});

app.get('/signout', (req, res) => {
  // models.User.find({
  //   email: req.user.email
  // }, function(err, doc) {
  //   if (err) {
  //     console.log(err)
  //   } else {
  //     res.json(doc)
  //   }
  // });
  console.log('bye bye');
  req.session.destroy(function(err) {
    res.json('You signed out!');
    console.log(req.session);
  })
});

//Sync Database
models.sequelize.sync().then(function() {
  console.log('Nice! Database looks fine')
}).catch(function(err) {
  console.log(err, "Something went wrong with the Database Update!")
});

app.listen(port, function(err) {
  if (!err)
    console.log("Site is live");
  else console.log(err)
});

app.get('/scrape', (req, res) => {

  request('https://www.cbssports.com/nfl/injuries', (err, response, html) => {
    const $ = cheerio.load(html);
    var allResults = [];
    $('.row1,.row2').each(function(i, element) {
      var result = {};
      result.name=$(this).find('a').text();
      result.position=$(this).find("[align='center']").text();
      result.status=$(this).find('td:nth-child(5)').text();
      result.news=$(this).find('td:nth-child(6)').text();
      result.injury=$(this).find('td:nth-child(4)').text();
      allResults.push(result);
      // models.sequelize.query(`INSERT INTO injuryUpdates(name, position, status, news, injury) VALUES ('${result.name}', '${result.position}', '${result.status}', '${result.news}', '${result.injury}')`);
      });
    res.json(allResults)
  });
});

app.get('/injuries', (req, res) => {
  InjuryUpdate.find({}, function(err, doc) {
    if (err) {
      console.log(err)
    } else {
      res.json(doc)
    }
  })
});

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
  localServer = "mongodb://localhost:27017/InjuryScrape2",
  InjuryUpdate = require('./app/MongoSearch/model/InjuryUpdate'),
  getTwitter = require('./app/TwitterScrape/twitterScrape'),
  db = mongoose.connection,
  port = process.env.PORT || 3001;

// const mongoose.promise = Promise;

mongoose.connect(localServer, {
  useMongoClient: true
});

db.on('error', function(err) {
  console.log('Database Error:', err)
});

db.once('open', function() {
  console.log('Mongoose connection successful')
});



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

  //Routes
  // authRoute = require('./app/routes/auth.js')(app, passport);

//load passport strategies
require('./app/config/passport/passport.js')(passport, models.user);

app.get('/fml', (req, res) => {
  console.log(req.isAuthenticated());
  res.send({'lmao': 'fml'});
});

app.get('/twitterScrape', function(req, res) {
  getTwitter.getTwitter();
  res.send('twitter scraped');
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
  transporter.sendMail(mailOptions, function(error, info){
      if(error){
          return console.log(error);
      }
      console.log('Message sent: ' + info.response);
  });
});

app.get('/', function(req, res) {
  res.redirect('/signin')
});

app.post('/signin', passport.authenticate('local-signin'), function(req, res) {
  res.send(req.body);
});

app.get('/signout', function(req, res) {
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

app.get('/scrape', function(req, res) {
  request('http://www.espn.com/nfl/injuries', function(err, response, html) {
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
      };
    });
  });
  res.send('scrape scrape')
});

app.get('/injuries', function(req, res) {
  InjuryUpdate.find({}, function(err, doc) {
    if (err) {
      console.log(err)
    } else {
      res.json(doc)
    }
  })
});

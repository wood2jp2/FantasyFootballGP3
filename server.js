const
  express = require('express'),
  app = express(),
  passport = require('passport'),
  session = require('express-session'),
  bodyParser = require('body-parser'),
  env = require('dotenv').load(),
  exphbs = require('express-handlebars'),
  port = process.env.PORT || 3001;

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

app.get('/fml', (req, res) => {
  console.log(req.isAuthenticated());
  res.send({'lmao': 'fml'});
});

app.post('/signup', passport.authenticate('local-signup'), (req, res) => {
  res.send(req.body);
});

//Models
const
  models = require("./app/models");

  //Routes
  // authRoute = require('./app/routes/auth.js')(app, passport);

//load passport strategies
require('./app/config/passport/passport.js')(passport, models.user);

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

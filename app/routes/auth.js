var authController = require('../controllers/authcontroller.js');
var path = require('path');

module.exports = function(app, passport) {

  app.get('/', function(req, res) {
    res.redirect('/home')
  });

  app.get('/home', function(req, res) {
    res.sendFile(path.join(__dirname, '../views/home.html'))
  });

  // app.get('/signup', authController.signup);
  //
  // app.get('/signin', authController.signin);
  console.log('FML');
  app.post('/signup', (req, res, next) => {
    console.log('iuhasfdiusdafuhiasudhfiusahd');

    // return passport.authenticate('local-signup', {
    //   successRedirect: '/dashboard',
    //   failureRedirect: '/signup'
    // })(req, res, next);
  });

  app.get('/dashboard', isLoggedIn, authController.dashboard);

  app.get('/logout', authController.logout);

  app.post('/signin', passport.authenticate('local-signin', {
    successRedirect: '/dashboard',
    failureRedirect: '/signin'
  }));

  function isLoggedIn(req, res, next) {
    if (req.isAuthenticated())
      return next();

    res.redirect('/signin');
  }
}

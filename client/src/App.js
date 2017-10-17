import React from "react";
<<<<<<< HEAD
import PlayersSearch from "./components/PlayersSearch";
import SignupComponent from './components/Signup';
import SigninComponent from './components/Signin';

const App = () => {
  return(
    <div>
      <PlayersSearch />
      <SigninComponent />
    </div>
=======
// import SignupComponent from './components/Signup';
import SigninComponent from './components/Signin';
import PlayersSearch from "./components/Search/PlayersSearch";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Wrapper from "./components/Wrapper/Wrapper";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

const App = () => {
  return(
    <Router>
      <div>
        <Navbar />
        <Wrapper>
          <Route exact path="/" component={SigninComponent} />
          <Route exact path="/signin" component={SigninComponent} />
          <Route exact path="/teammanager" component={PlayersSearch} />
        </Wrapper>
        <Footer />
      </div>
    </Router>
>>>>>>> c8ea6bd2d464d9c6082ff0d661ec897189406624
  );
};

export default App;

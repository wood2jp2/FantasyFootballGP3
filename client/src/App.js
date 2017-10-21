import React from "react";
import SigninComponent from './components/Signin';
import PlayersSearch from "./components/Search/PlayersSearch";
import PlayerRankings from "./components/Rankings/PlayerRankings";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Wrapper from "./components/Wrapper/Wrapper";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import SignupComponent from './components/Signup';

const App = () => {
  return(
    <Router>
      <div>
        <Navbar />
        <Wrapper>
          <Route exact path="/" component={SigninComponent} />
          <Route exact path="/signin" component={SigninComponent} />
          <Route exact path='/signup' component={SignupComponent} />
          <Route exact path="/teammanager" component={PlayersSearch} />
          <Route exact path="/player_rankings" component={PlayerRankings} />
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
};

export default App;

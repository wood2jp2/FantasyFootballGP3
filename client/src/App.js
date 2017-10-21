import React from "react";
import SigninComponent from './components/Signin';
import PlayersSearch from "./components/Search/PlayersSearch";
import PlayerRankings from "./components/Rankings/PlayerRankings";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Wrapper from "./components/Wrapper/Wrapper";
import WelcomeHomepage from './Welcome'
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import SignupComponent from './components/Signup';
import SignoutComponent from './components/Signout';
import FailedLog from './components/Fail';

class App extends React.Component {
  state = {
    authenticated: false,
    userEmail: ''
  }

  render() {
    return(
      <Router>
        <div>
          <Navbar authenticated={this.state.authenticated} />
          <Wrapper>

            <Route exact path="/" render={(props) => {
              return <SigninComponent {...props} onSuccess={(email) => {
                this.setState({
                  authenticated: true,
                  userEmail: email
                });
                console.log('app.js thing is logging')
              }} />;
            }} />

            <Route exact path="/signin" render={(props) => {
              return <SigninComponent {...props} onSuccess={(email) => {
                this.setState({
                  authenticated: true,
                  userEmail: email
                });
                console.log(this.state);
              }} />;
            }} />

            <Route exact path='/signout' render={(props) => {
              return <SignoutComponent email={this.state.userEmail} {...props} onSuccess={(email) => {
                this.setState({
                  authenticated: false,
                  userEmail: ''
                })
              }} />;
            }} />

            {/* <Route exact path='/logout' render=/> */}

            <Route exact path='/signup' render={(props) => {
            return <SignupComponent {...props} onSuccess={(email) => {
              this.setState({
                authenticated: true,
                userEmail: email
              })
            }} />
          }} />

          {this.state.authenticated &&
            <Route exact path='/playerRankings' component={PlayerRankings} />
          }

            {this.state.authenticated &&
              <Route exact path="/teammanager" component={PlayersSearch} />
            }

            {this.state.authenticated &&
              <Route exact path='/welcome' component={WelcomeHomepage} />
            }



            <Route exact path='/FailedLog' component={FailedLog} />

          </Wrapper>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;

import React from "react";
import SigninComponent from './components/Signin';
import PlayersSearch from "./components/Search/PlayersSearch";
import PlayerRankings from "./components/Rankings/PlayerRankings";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Wrapper from "./components/Wrapper/Wrapper";
import WelcomeHomepage from './Welcome'
import Navbar from "./components/Navbar/Navbar";
import SignupComponent from './components/Signup';
import SignoutComponent from './components/Signout';
import TwitterFeedComponent from './components/TwitterScrape/TwitterFeed';
import InjuryComponent from './components/InjuryScrape/InjuryComponent';
import FailedLog from './components/Fail';
import axios from 'axios';

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

            <Route exact path='/signout' something={this} render={(props) => {
              const email = this.state.userEmail;
              console.log(email);
              return <SignoutComponent {...props} onSuccess={() => {
                axios.get('/signout', {
                    email: email
              }).then(response => {
                console.log('signing out');
                this.setState({
                  authenticated: false,
                  userEmail: ''
                });
                props.history.push('/signin');
              }
            )}
          } />;
            }} />

            <Route exact path='/signup' render={(props) => {
              console.log('asdfdsas');
            return <SignupComponent {...props} onSuccess={(email) => {
              this.setState({
                authenticated: true,
                userEmail: email
              })
            }} />
          }} />

          {this.state.authenticated &&
            <div>
              <Route exact path='/playerRankings' component={PlayerRankings} />
              <Route exact path='/twitter' component={TwitterFeedComponent} />
              <Route exact path='/injuries' component={InjuryComponent} />
            </div>
          }

            {this.state.authenticated &&
              <Route exact path="/teammanager" component={PlayersSearch} />
            }

            {this.state.authenticated &&
              <Route exact path='/welcome' component={WelcomeHomepage} />
            }



            <Route exact path='/FailedLog' component={FailedLog} />

          </Wrapper>
        </div>
      </Router>
    );
  }
}

export default App;

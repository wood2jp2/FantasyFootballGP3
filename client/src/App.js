import React from "react";
// import SignupComponent from './components/Signup';
import SigninComponent from './components/Signin';
import PlayersSearch from "./components/Search/PlayersSearch";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Wrapper from "./components/Wrapper/Wrapper";
import WelcomeHomepage from './Welcome'
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import SignupComponent from './components/Signup';
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
          <Navbar />
          <Wrapper>
            <Route exact path="/signin" render={(props) => {
              return <SigninComponent {...props} onSuccess={(email) => {
                this.setState({
                  authenticated: true,
                  userEmail: email
                });
                console.log('app.js thing is logging')
              }} />;
            }} />

            <Route exact path='/signup' render={(props) => {
            return <SignupComponent {...props} onSuccess={(email) => {
              this.setState({
                authenticated: true,
                userEmail: email
              })
            }} />
          }} />

            {this.state.authenticated &&
              <Route exact path="/teammanager" component={PlayersSearch} />
            }
              {/* <Route exact path="/failedLogin" component={FailedLog} /> */}

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

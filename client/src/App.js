import React from "react";
import PlayersSearch from "./components/PlayersSearch";
import SignupComponent from './components/Signup';
import SigninComponent from './components/Signin';

const App = () => {
  return(
    <div>
      <PlayersSearch />
      <SigninComponent />
    </div>
  );
};

export default App;

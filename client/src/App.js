import React from "react";
// import SignupComponent from './components/Signup';
import SigninComponent from './components/Signin';
import PlayersSearch from "./components/Search/PlayersSearch";


const App = () => {
  return(
    <div>
      <PlayersSearch />
      <SigninComponent />
    </div>
  );
};

export default App;

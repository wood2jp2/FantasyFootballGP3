import React, { Component } from "react";
import AllPlayers from "./AllPlayers";
import API from "../utils/API";

class PlayersSearch extends Component {
  state = {
    players: []
  };

  componentDidMount() {
    API.getPlayersList()
      .then(res => {
        console.log(res.data);
        this.setState({players: res.data.players})})
      .catch(err => console.log(err));
  }

  render() {
    return(
      <AllPlayers results={this.state.players}/>
    )
  }
}

export default PlayersSearch;

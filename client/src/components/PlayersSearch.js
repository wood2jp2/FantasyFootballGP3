import React, { Component } from "react";
import AddPlayers from "./AddPlayers";
import TeamList from "./TeamList";
import API from "../utils/API";

class PlayersSearch extends Component {
  state = {
    playerSearch: "",
    playersNames: [],
    playersStats: [],
    starterPlayers: [],
    benchPlayers: []
  };

  componentDidMount() {
    API.getPlayersList()
      .then(res => {
        const onlyNames = res.data.players.reduce((item, i) =>
        {return [...item, i.name]}, ["Players"]);
        console.log(res.data.players);
        console.log(onlyNames);
        this.setState({
          playersNames: onlyNames,
          playersStats: res.data.players
        })})
      .catch(err => console.log(err));
  }

  handleInputChange = e => {
    this.setState({playerSearch: e.target.value });
  };

  createTeam(newplayer) {
    this.state.starterPlayers.push({
      newplayer
    });
    this.setState({starterPlayers: this.state.starterPlayers });
    console.log(this.state);
  };

  deletePlayer(delplayer) {
    console.log(delplayer);
    console.log(this.state.starterPlayers);
    const newList = this.state.starterPlayers.filter( player => {
      return (player.newplayer !== delplayer);
    });

    this.setState({starterPlayers: newList });
    console.log(this.state);
  };

  render() {
    return(
//      <AllPlayers results={this.state.playersStats}/>
      <div>
        <h2>Starter Players</h2>
        <AddPlayers
          createTeam={this.createTeam.bind(this)}
          handleInputChange={this.handleInputChange}
          playersNames={this.state.playersNames}
        />
        <TeamList
          starterPlayers={this.state.starterPlayers}
          deletePlayer={this.deletePlayer.bind(this)}
        />
      </div>
    );
  }
}

export default PlayersSearch;

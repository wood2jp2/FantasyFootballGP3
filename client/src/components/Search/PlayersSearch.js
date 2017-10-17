import React, { Component } from "react";
import AddPlayers from "../AddPlayers";
import Container from "../Wrappers/Container";
import TeamList from "../TeamList";
import API from "../../utils/API";
import "../Wrappers/Container.css";
import "./PlayersSearch.css";

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
        this.setState({
          playersNames: onlyNames,
          playersStats: res.data.players
        })})
      .catch(err => console.log(err));
  }

  handleInputChange = e => {
    e.preventDefault();
    this.setState({playerSearch: e.target.value });
  };

  createTeam(newplayer) {
    const allplayerStats = this.state.playersStats.find( i => {
      return i.name === newplayer;
    });
    this.state.starterPlayers.push({
      allplayerStats
    });
    this.setState({starterPlayers: this.state.starterPlayers });
    console.log(this.state);
  };

  deletePlayer(delplayer) {
    console.log(delplayer);
    console.log(this.state.starterPlayers);
    const newList = this.state.starterPlayers.filter( player => {
      return (player.allplayerStats.name !== delplayer.name);
    });

    this.setState({starterPlayers: newList });
    console.log(this.state);
  };

  render() {
    return(
//      <AllPlayers results={this.state.playersStats}/>
      <container className="players-table" style={{ minHeight: "100%" }}>
        <div>
          <h3>STARTER PLAYERS</h3>
          <AddPlayers
            createTeam={this.createTeam.bind(this)}
            handleInputChange={this.handleInputChange}
            playersNames={this.state.playersNames}
          />
          <TeamList
            starterPlayers={this.state.starterPlayers}
            playersStats={this.state.playersStats}
            deletePlayer={this.deletePlayer.bind(this)}
          />
        </div>
      </container>
    );
  }
}

export default PlayersSearch;

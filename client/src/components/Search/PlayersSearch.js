import React, { Component } from "react";
import AddPlayers from "../AddPlayers/AddPlayers";
import Container from "../Container/Container";
import TeamList from "../TeamList/TeamList";
import API from "../../utils/API";
import "../Container/Container.css";
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

  createStarterTeam(newplayer) {
    const allplayerStats = this.state.playersStats.find( i => {
      return i.name === newplayer;
    });

    if (this.state.starterPlayers.length < 9) {
    this.state.starterPlayers.push({
      allplayerStats
    });
    this.setState({starterPlayers: this.state.starterPlayers });
    } else {
      alert("You can only have 9 Starter Players");
    }
  };

  createBenchTeam(newplayer) {
    const allplayerStats = this.state.playersStats.find( i => {
      return i.name === newplayer;
    });

    if (this.state.benchPlayers.length < 6) {
      this.state.benchPlayers.push({
        allplayerStats
      });
      this.setState({benchPlayers: this.state.benchPlayers });
    } else {
        alert("You can only have 6 Bench Players");
    }
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
            createTeam={this.createStarterTeam.bind(this)}
            handleInputChange={this.handleInputChange}
            playersNames={this.state.playersNames}
          />
          <TeamList
            teamPlayers={this.state.starterPlayers}
            playersStats={this.state.playersStats}
            deletePlayer={this.deletePlayer.bind(this)}
          />
        </div>

        <div>
          <h3>BENCH PLAYERS</h3>
          <AddPlayers
            createTeam={this.createBenchTeam.bind(this)}
            handleInputChange={this.handleInputChange}
            playersNames={this.state.playersNames}
          />
          <TeamList
            teamPlayers={this.state.benchPlayers}
            playersStats={this.state.playersStats}
            deletePlayer={this.deletePlayer.bind(this)}
          />
        </div>
      </container>
    );
  }
}

export default PlayersSearch;

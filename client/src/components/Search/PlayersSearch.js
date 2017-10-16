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
    this.state.starterPlayers.push({
      allplayerStats
    });
    this.setState({starterPlayers: this.state.starterPlayers });
  };

  createBenchTeam(newplayer) {
    const allplayerStats = this.state.playersStats.find( i => {
      return i.name === newplayer;
    });
    this.state.benchPlayers.push({
      allplayerStats
    });
    this.setState({benchPlayers: this.state.benchPlayers });
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
      <Container className="players-table" >
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
      </Container>
    );
  }
}

export default PlayersSearch;

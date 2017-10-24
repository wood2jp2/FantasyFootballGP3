import React, { Component } from "react";
import "materialize-css";
import "react-materialize";
import AddPlayers from "../AddPlayers/AddPlayers";
import Container from "../Container/Container";
import TeamList from "../TeamList/TeamList";
import API from "../../utils/API";
import store from "../../Store";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { loadAddPlayer } from "../../actions/rankings-layout-actions";
import "./PlayersSearch.css";

class PlayersSearch extends Component {
  constructor(props) {
    super(props);
    this.loadAddPlayer = props.loadAddPlayer;
  };

  componentDidMount() {
    API.getPlayersList()
      .then(res => {
        const onlyNames = res.data.players.reduce((item, i) =>
        {return [...item, i.name]}, ["Players"]);
        this.loadAddPlayer({
          playersNames: onlyNames,
          playersStats: res.data.players
        })})
      .catch(err => console.log(err));
  }

  createStarterTeam(stplayer) {
    const allplayerStats = this.props.playersStats.find( i => {
      return i.name === stplayer;
    });

    if (this.props.starterPlayers.length < 9) {
      this.props.starterPlayers.push({
        ...allplayerStats
    });
      this.loadAddPlayer({payloadContainer: {starterPlayers: this.props.starterPlayers }});
    } else {
      alert("You can only have 9 Starter Players");
    }
  };

  createBenchTeam(bnplayer) {
    const allplayerStats = this.props.playersStats.find( i => {
      return i.name === bnplayer;
    });

    if (this.props.benchPlayers.length < 6) {
      this.props.benchPlayers.push({
        ...allplayerStats
      });
      this.loadAddPlayer({payloadContainer: {benchPlayers: this.props.benchPlayers }});
    } else {
        alert("You can only have 6 Bench Players");
    }
  };

  deleteStarterPlayer(delplayer) {
    const newList = this.props.starterPlayers.filter( player => {
      return (player.name !== delplayer.name);
    });
    this.loadAddPlayer({payloadContainer: {starterPlayers: newList }});
  };

  deleteBenchPlayer(delplayer) {
    const newList = this.props.benchPlayers.filter( player => {
      return (player.name !== delplayer.name);
    });
    this.loadAddPlayer({payloadContainer: {benchPlayers: newList }});
  };

  render() {
    return(
      <container className="players-table" style={{ minHeight: "100%" }}>
        <div className= "players-table brown lighten-5">
          <h3>STARTERS</h3>
          <AddPlayers
            createTeam={this.createStarterTeam.bind(this)}
            playersNames={this.props.playersNames}
            newPlayer={this.props.payloadContainer}
            addPlayer={this.loadAddPlayer}
          />
          <TeamList
            teamPlayers={this.props.starterPlayers}
            deletePlayer={this.deleteStarterPlayer.bind(this)}
          />
        </div>
        <br></br>
        <br></br>
        <br></br>
        <div className= "players-table brown lighten-5">
          <h3>BENCH</h3>
          <AddPlayers
            createTeam={this.createBenchTeam.bind(this)}
            playersNames={this.props.playersNames}
            newPlayer={this.props.payloadContainer}
            addPlayer={this.loadAddPlayer}
          />
          <TeamList
            teamPlayers={this.props.benchPlayers}
            deletePlayer={this.deleteBenchPlayer.bind(this)}
          />
        </div>
      </container>
    );
}
  }

function mapDispatchToProps(dispatch) {
  return bindActionCreators({loadAddPlayer}, dispatch);
};

function mapStateToProps(state) {
  return {
    playerSearch: state.playerSearch,
    playersNames: state.playersNames,
    playersStats: state.playersStats,
    starterPlayers: state.starterPlayers,
    benchPlayers: state.benchPlayers,
    payloadContainer: state.payloadContainer
}
};

export default connect(mapStateToProps, mapDispatchToProps)(PlayersSearch);

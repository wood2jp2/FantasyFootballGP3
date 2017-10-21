import React, { Component } from "react";
import AddPlayers from "../AddPlayers/AddPlayers";
import Container from "../Container/Container";
import TeamList from "../TeamList/TeamList";
import API from "../../utils/API";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { loadSearchUpdate, loadApidataUpdate, loadStarterUpdate, loadBenchUpdate } from "../../actions/rankings-layout-actions";
import "./PlayersSearch.css";

class PlayersSearch extends Component {
  constructor(props) {
    super(props);
    this.loadSearchUpdate = props.loadSearchUpdate;
    this.loadApidataUpdate = props.loadApidataUpdate;
    this.loadStarterUpdate = props.loadStarterUpdate;
    this.loadBenchUpdate = props.loadBenchUpdate;
  };

  componentDidMount() {
    API.getPlayersList()
      .then(res => {
        const onlyNames = res.data.players.reduce((item, i) =>
        {return [...item, i.name]}, ["Players"]);
        this.loadApidataUpdate({
          playersNames: onlyNames,
          playersStats: res.data.players
        })})
      .catch(err => console.log(err));
  }

  handleInputChange = e => {
    e.preventDefault();
    this.loadSearchUpdate({playerSearch: e.target.value });
  };

  createStarterTeam(newplayer) {
    const allplayerStats = this.props.playersStats.find( i => {
      return i.name === newplayer;
    });

    if (this.props.starterPlayers.length < 9) {
      this.props.starterPlayers.push({
        allplayerStats
      });
      this.loadStarterUpdate({starterPlayers: this.props.starterPlayers });
      console.log("New Starter player just updated the store");
    } else {
      alert("You can only have 9 Starter Players");
    }
  };

  createBenchTeam(newplayer) {
    const allplayerStats = this.props.playersStats.find( i => {
      return i.name === newplayer;
    });

    if (this.props.benchPlayers.length < 6) {
      this.props.benchPlayers.push({
        allplayerStats
      });
      this.loadBenchUpdate({benchPlayers: this.props.benchPlayers });
      console.log("New Bench player just updated the store");
    } else {
        alert("You can only have 6 Bench Players");
    }
  };

  deleteStarterPlayer(delplayer) {
    const newList = this.props.starterPlayers.filter( player => {
      return (player.allplayerStats.name !== delplayer.name);
    });

    this.loadStarterUpdate({starterPlayers: newList });
  };

  deleteBenchPlayer(delplayer) {
    const newList = this.props.benchPlayers.filter( player => {
      return (player.allplayerStats.name !== delplayer.name);
    });

    this.loadBenchUpdate({benchPlayers: newList });
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
            playersNames={this.props.playersNames}
          />
          <TeamList
            teamPlayers={this.props.starterPlayers}
            playersStats={this.props.playersStats}
            deletePlayer={this.deleteStarterPlayer.bind(this)}
          />
        </div>

        <div>
          <h3>BENCH PLAYERS</h3>
          <AddPlayers
            createTeam={this.createBenchTeam.bind(this)}
            handleInputChange={this.handleInputChange}
            playersNames={this.props.playersNames}
          />
          <TeamList
            teamPlayers={this.props.benchPlayers}
            playersStats={this.props.playersStats}
            deletePlayer={this.deleteBenchPlayer.bind(this)}
          />
        </div>
      </Container>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({loadSearchUpdate, loadApidataUpdate, loadStarterUpdate, loadBenchUpdate}, dispatch);
};

const mapStateToProps = (state) => {
  return {
    playerSearch: state.playerSearch,
    playersNames: state.playersNames,
    playersStats: state.playersStats,
    starterPlayers: state.starterPlayers,
    benchPlayers: state.benchPlayers
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(PlayersSearch);

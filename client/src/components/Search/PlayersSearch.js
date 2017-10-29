import React, { Component } from "react";
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
    this.loadNFLFeeds();
    this.loadSportFeeds();
  }

  loadNFLFeeds = () => {
    API.getPlayersList()
      .then(res => {
        const onlyNames = res.data.players.reduce((item, i) =>
        {return [...item, i.name]}, ["Players"]);
        store.dispatch(loadAddPlayer({
          playersNames: onlyNames,
          playersStats: res.data.players
        }))})
      .catch(err => console.log(err));
  }

  loadSportFeeds = () => {
    API.getSportsFeeds()
      .then(function (res) {
        console.log(res.data);
        alert("All APIs are loaded!");
        const QBconsolidatedStats = [];
        const RBconsolidatedStats = [];
        const WRconsolidatedStats = [];
        const TEconsolidatedStats = [];
        const KconsolidatedStats = [];
        const apishortcut = res.data.cumulativeplayerstats.playerstatsentry;
        const QBacks = apishortcut.filter( i => {
          return i.player.Position === "QB"
        });
        const RBacks = apishortcut.filter( i => {
          return i.player.Position === "RB"
        });
        const WReceivers = apishortcut.filter( i => {
          return i.player.Position === "WR"
        });
        const TEnds = apishortcut.filter( i => {
          return i.player.Position === "TE"
        });
        const Kickers = apishortcut.filter( i => {
          return i.player.Position === "K"
        });

        for (const i of QBacks) {
          let fullName = i.player.FirstName + " " + i.player.LastName;
          let position = i.player.Position;
          let team = i.team.Abbreviation;
          let compAtt = i.stats.PassCompletions["#text"] + "/" + i.stats.PassAttempts["#text"];
          let passTD = i.stats.PassTD["#text"];
          let passYD = i.stats.PassYards["#text"];
          let passInt = i.stats.PassInt["#text"];
          let rushAtt = i.stats.RushAttempts["#text"];
          let rushTD = i.stats.RushTD["#text"];
          let rushYD = i.stats.RushYards["#text"];
          let receptions = i.stats.Receptions["#text"];
          let recTD = i.stats.RecTD["#text"];
          let recYD = i.stats.RecYards["#text"];
          QBconsolidatedStats.push({
            name: fullName,
            position: position,
            team: team,
            compAtt: compAtt,
            passTD: passTD,
            passYD: passYD,
            passInt: passInt,
            rushAtt: rushAtt,
            rushTD: rushTD,
            rushYD: rushYD,
            receptions: receptions,
            recTD: recTD,
            recYD: recYD
          });
        };
        store.dispatch(loadAddPlayer({
          QBFeedStats: QBconsolidatedStats })
        );

        for (const i of RBacks) {
          let fullName = i.player.FirstName + " " + i.player.LastName;
          let position = i.player.Position;
          let team = i.team.Abbreviation;
          let compAtt = i.stats.PassCompletions["#text"] + "/" + i.stats.PassAttempts["#text"];
          let passTD = i.stats.PassTD["#text"];
          let passYD = i.stats.PassYards["#text"];
          let passInt = i.stats.PassInt["#text"];
          let rushAtt = i.stats.RushAttempts["#text"];
          let rushTD = i.stats.RushTD["#text"];
          let rushYD = i.stats.RushYards["#text"];
          let receptions = i.stats.Receptions["#text"];
          let recTD = i.stats.RecTD["#text"];
          let recYD = i.stats.RecYards["#text"];
          RBconsolidatedStats.push({
            name: fullName,
            position: position,
            team: team,
            compAtt: compAtt,
            passTD: passTD,
            passYD: passYD,
            passInt: passInt,
            rushAtt: rushAtt,
            rushTD: rushTD,
            rushYD: rushYD,
            receptions: receptions,
            recTD: recTD,
            recYD: recYD
          });
        };
        store.dispatch(loadAddPlayer({
          RBFeedStats: RBconsolidatedStats })
        );

        for (const i of WReceivers) {
          let fullName = i.player.FirstName + " " + i.player.LastName;
          let position = i.player.Position;
          let team = i.team.Abbreviation;
          let compAtt = i.stats.PassCompletions["#text"] + "/" + i.stats.PassAttempts["#text"];
          let passTD = i.stats.PassTD["#text"];
          let passYD = i.stats.PassYards["#text"];
          let passInt = i.stats.PassInt["#text"];
          let rushAtt = i.stats.RushAttempts["#text"];
          let rushTD = i.stats.RushTD["#text"];
          let rushYD = i.stats.RushYards["#text"];
          let receptions = i.stats.Receptions["#text"];
          let recTD = i.stats.RecTD["#text"];
          let recYD = i.stats.RecYards["#text"];
          WRconsolidatedStats.push({
            name: fullName,
            position: position,
            team: team,
            compAtt: compAtt,
            passTD: passTD,
            passYD: passYD,
            passInt: passInt,
            rushAtt: rushAtt,
            rushTD: rushTD,
            rushYD: rushYD,
            receptions: receptions,
            recTD: recTD,
            recYD: recYD
          });
        };
        store.dispatch(loadAddPlayer({
          WRFeedStats: WRconsolidatedStats })
        );

        for (const i of TEnds) {
          let fullName = i.player.FirstName + " " + i.player.LastName;
          let position = i.player.Position;
          let team = i.team.Abbreviation;
          let compAtt = i.stats.PassCompletions["#text"] + "/" + i.stats.PassAttempts["#text"];
          let passTD = i.stats.PassTD["#text"];
          let passYD = i.stats.PassYards["#text"];
          let passInt = i.stats.PassInt["#text"];
          let rushAtt = i.stats.RushAttempts["#text"];
          let rushTD = i.stats.RushTD["#text"];
          let rushYD = i.stats.RushYards["#text"];
          let receptions = i.stats.Receptions["#text"];
          let recTD = i.stats.RecTD["#text"];
          let recYD = i.stats.RecYards["#text"];
          TEconsolidatedStats.push({
            name: fullName,
            position: position,
            team: team,
            compAtt: compAtt,
            passTD: passTD,
            passYD: passYD,
            passInt: passInt,
            rushAtt: rushAtt,
            rushTD: rushTD,
            rushYD: rushYD,
            receptions: receptions,
            recTD: recTD,
            recYD: recYD
          });
        };
        store.dispatch(loadAddPlayer({
          TEFeedStats: TEconsolidatedStats })
        );

        for (const i of Kickers) {
          let fullName = i.player.FirstName + " " + i.player.LastName;
          let position = i.player.Position;
          let team = i.team.Abbreviation;
          let f30Pct = i.stats.Fg30_39Pct["#text"];
          let f40Pct = i.stats.Fg40_49Pct["#text"];
          let f50Pct = i.stats.Fg50PlusPct["#text"];
          let fandxPts = i.stats.FgAndXpPts["#text"];
          KconsolidatedStats.push({
            name: fullName,
            position: position,
            team: team,
            f30Pct: f30Pct,
            f40Pct: f40Pct,
            f50Pct: f50Pct,
            fandxPts: fandxPts
          });
        };
        store.dispatch(loadAddPlayer({
          KFeedStats: KconsolidatedStats })
        );

        })
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

    if (this.props.benchPlayers.length < 7) {
      this.props.benchPlayers.push({
        ...allplayerStats
      });
      this.loadAddPlayer({payloadContainer: {benchPlayers: this.props.benchPlayers }});
    } else {
        alert("You can only have 7 Bench Players");
    }
  };

  deleteStarterPlayer(delplayer) {
    const newList = this.props.starterPlayers.filter( player => {
      return (player.name !== delplayer.name);
    });
    this.loadAddPlayer({starterPlayers: newList });
  };

  deleteBenchPlayer(delplayer) {
    const newList = this.props.benchPlayers.filter( player => {
      return (player.name !== delplayer.name);
    });
    this.loadAddPlayer({benchPlayers: newList });
  };

  renderSubmitToDatabase() {
    return(
      <div>
        <button onClick={this.submitTeam}>Submit</button>
      </div>
    );
  }

  render() {
    return(
      <Container>
        <div className="players-table striped grey lighten-5">
          <h3>STARTER PLAYERS</h3>
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
          {this.renderSubmitToDatabase()}
        </div>

        <div className="players-table striped grey lighten-5">
          <h3>BENCH PLAYERS</h3>
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
          {this.renderSubmitToDatabase()}
        </div>
      </Container>
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
    QBFeedStats: state.QBFeedStats,
    RBFeedStats: state.RBFeedStats,
    WRFeedStats: state.WRFeedStats,
    TEFeedStats: state.TEFeedStats,
    KFeedStats: state.KFeedStats,
    starterPlayers: state.starterPlayers,
    benchPlayers: state.benchPlayers,
    payloadContainer: state.payloadContainer
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(PlayersSearch);

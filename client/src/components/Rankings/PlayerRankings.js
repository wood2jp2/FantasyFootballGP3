import React from "react";
import Container from "../Container/Container";
import RankingList from "../TeamList/RankingList";
import { connect } from "react-redux";
import "./PlayerRankings.css";

class PlayerRankings extends React.Component {

  render(){
    return(
      <Container className="rankings-table">
        <div className="table-responsive"></div>
        <div>
          <h3>STARTERS</h3>
          <RankingList
            teamPlayers={this.props.starterPlayers}
          />
        </div>

        <div>
          <h3>BENCH</h3>
          <RankingList
            teamPlayers={this.props.benchPlayers}
          />
        </div>
      </Container>
    );
  }
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

export default connect(mapStateToProps)(PlayerRankings);

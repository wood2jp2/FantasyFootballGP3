import React, { Component } from "react";
import Container from "../Container/Container";
import RankingList from "../TeamList/RankingList";
import RankingKList from "../TeamList/RankingKList";
import RankingSBList from "../TeamList/RankingSBList";
import { connect } from "react-redux";


class PlayerRankings extends React.Component {

  render(){
    return(

      <Container>
        <div className="rankings-table" >
          <div>
            <h3>QUARTERBACK</h3>
            <RankingList
              teamPlayers={this.props.QBFeedStats}
              allPlayersnfl={this.props.playersStats}
              markedPosition={this.props.QBFeedStats[0].position}
            />
          </div>
        </div>
        <div className="rankings-table" >
          <div>
            <h3>RUNNING BACK</h3>
            <RankingList
              teamPlayers={this.props.RBFeedStats}
              allPlayersnfl={this.props.playersStats}
              markedPosition={this.props.RBFeedStats[0].position}
            />
          </div>
        </div>
        <div className="rankings-table" >
          <div>
            <h3>WIDE RECEIVER</h3>
            <RankingList
              teamPlayers={this.props.WRFeedStats}
              allPlayersnfl={this.props.playersStats}
              markedPosition={this.props.WRFeedStats[0].position}
            />
          </div>
        </div>
        <div className="rankings-table" >
          <div>
            <h3>TIGHT END</h3>
            <RankingList
              teamPlayers={this.props.TEFeedStats}
              allPlayersnfl={this.props.playersStats}
              markedPosition={this.props.TEFeedStats[0].position}
            />
          </div>
        </div>
        <div className="rankings-table" >
          <div>
            <h3>KICKERS</h3>
            <RankingKList
              teamPlayers={this.props.KFeedStats}
            />
          </div>
        </div>
        <div className="rankings-table" >
          <div>
          <h3>STARTER PLAYERS</h3>
            <RankingSBList
              teamPlayers={this.props.starterPlayers}
            />
          </div>
          <div>
            <h3>BENCH PLAYERS</h3>
            <RankingSBList
              teamPlayers={this.props.benchPlayers}
            />
          </div>
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

export default connect(mapStateToProps)(PlayerRankings);

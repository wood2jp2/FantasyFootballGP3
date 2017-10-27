import React from "react";
import RankingKListHeader from "./RankingKList-Header"
import RankingKListPlayers from "./RankingKList-Players"

class RankingKList extends React.Component {
  renderPlayers() {

    const topKickList = this.props.teamPlayers.sort(function (a, b) {
      return b.fandxPts - a.fandxPts;
    });
    const topObjStats = topKickList.slice(0, 10);
    console.log(topObjStats);

    return topObjStats.map((player, index) =>
      <RankingKListPlayers key={index}
        teamData={player}
      />
    );
  }

  render() {
    return (
      <table className="table table-inverse">
        <RankingKListHeader />
        <tbody>
          {this.renderPlayers()}
        </tbody>
      </table>
    );
  };
};

export default RankingKList;

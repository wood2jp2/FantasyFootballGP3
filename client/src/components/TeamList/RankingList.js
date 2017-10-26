import React from "react";
import RankingListHeader from "./RankingList-Header"
import RankingListPlayers from "./RankingList-Players"

class RankingList extends React.Component {
  renderPlayers() {
    const finalTopStats = [];
    const positionStatsOnly = this.props.allPlayersnfl.filter( i => {
      return i.position === this.props.markedPosition;
    });
    const topObjList = positionStatsOnly.sort(function (a, b) {
      return b.seasonPts - a.seasonPts;
    });
    const topObjStats = topObjList.slice(0, 10);

    for (let z = 0; z < topObjStats.length; z++) {
      let sortingPlayers = this.props.teamPlayers.find( i => {
        return i.name === topObjStats[z].name;
      })
      finalTopStats.push(sortingPlayers);
      finalTopStats[z].Pts = topObjStats[z].seasonPts;
    }

    console.log(finalTopStats);
    return finalTopStats.map((player, index) =>
      <RankingListPlayers key={index}
        teamData={player}
      />
    );
  }

  render() {
    return (
      <table className="table table-inverse">
        <RankingListHeader />
        <tbody>
          {this.renderPlayers()}
        </tbody>
      </table>
    );
  };
};

export default RankingList;

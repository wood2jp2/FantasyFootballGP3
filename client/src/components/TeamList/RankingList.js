import React from "react";
import RankingListHeader from "./RankingList-Header"
import RankingListPlayers from "./RankingList-Players"

class RankingList extends React.Component {
  renderPlayers() {
    return this.props.teamPlayers.map((player, index) =>
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

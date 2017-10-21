import React from "react";
import TeamListHeader from "./RankingList-Header"
import TeamListPlayers from "./RankingList-Players"

class TeamList extends React.Component {
  renderPlayers() {
    console.log(this.props.teamPlayers);
    return this.props.teamPlayers.map((player, index) =>
      <TeamListPlayers key={index}
        teamPlayers={player.allplayerStats}
      />
    );
  }

  render() {
    return (
      <table className="table table-inverse">
        <TeamListHeader />
        <tbody>
          {this.renderPlayers()}
        </tbody>
      </table>
    );
  };
};

export default TeamList;

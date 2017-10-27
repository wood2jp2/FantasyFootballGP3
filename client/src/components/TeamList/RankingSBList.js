import React from "react";
import RankingSBListHeader from "./RankingSBList-Header"
import RankingSBListPlayers from "./RankingSBList-Players"

class RankingSBList extends React.Component {

  renderPlayers() {
    return this.props.teamPlayers.map((player, index) =>
      <RankingSBListPlayers key={index}
        teamData={player}
      />
    );
  }

  render() {
    return (
      <table className="table table-inverse">
        <RankingSBListHeader />
        <tbody>
          {this.renderPlayers()}
        </tbody>
      </table>
    );
  };
};

export default RankingSBList;

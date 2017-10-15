import React from "react";
import TeamListHeader from "./TeamList-Header"
import TeamListPlayers from "./TeamList-Players"

class TeamList extends React.Component {
  renderPlayers() {
    console.log(this.props.playersStats);
    console.log(this.props.starterPlayers);
    return this.props.starterPlayers.map((player, index) =>
      <TeamListPlayers key={index}
        starterPlayers={player.allplayerStats}
        deletePlayer={this.props.deletePlayer.bind(this, player.allplayerStats)}
      />
    );
  }

  render() {
    return (
      <table className="table table-bordered table-striped">
        <TeamListHeader />
        <tbody>
          {this.renderPlayers()}
        </tbody>
      </table>
    );
  };
};

export default TeamList;

import React from "react";
import TeamListHeader from "./TeamList-Header"
import TeamListPlayers from "./TeamList-Players"

class TeamList extends React.Component {
  renderPlayers() {
    console.log(this.props.starterPlayers);
    return this.props.starterPlayers.map((player, index) =>
      <TeamListPlayers key={index}
        starterPlayers={player.newplayer}
        deletePlayer={this.props.deletePlayer.bind(this, player.newplayer)}
      />
    );
  }

  render() {
    return (
      <table>
        <TeamListHeader />
        <tbody>
          {this.renderPlayers()}
        </tbody>
      </table>
    );
  };
};

export default TeamList;

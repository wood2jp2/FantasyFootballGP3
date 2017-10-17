import React from "react";
import TeamListHeader from "./TeamList-Header"
import TeamListPlayers from "./TeamList-Players"

class TeamList extends React.Component {
  renderPlayers() {
    return this.props.teamPlayers.map((player, index) =>
      <TeamListPlayers key={index}
        teamPlayers={player.allplayerStats}
        deletePlayer={this.props.deletePlayer.bind(this, player.allplayerStats)}
      />
    );
  }

  renderSubmitToDatabase() {
    return(
      <div>
        <button onClick={this.props.submitTeam}>Submit</button>
      </div>
    );
  }

  render() {
    return (
      <table className="table table-inverse">
        <TeamListHeader />
        <tbody>
          {this.renderPlayers()}
          {this.renderSubmitToDatabase()}
        </tbody>
      </table>
    );
  };
};

export default TeamList;

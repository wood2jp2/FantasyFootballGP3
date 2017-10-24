import React from "react";
import TeamListHeader from "./TeamList-Header"
import TeamListPlayers from "./TeamList-Players"

class TeamList extends React.Component {

  renderPlayers() {
    console.log(this.props.teamPlayers)
    return this.props.teamPlayers.map((player, index) =>
      <TeamListPlayers key={index}
        teamData={player}
        deletePlayer={this.props.deletePlayer.bind(this, player)}
      />
    );
  }

  renderSubmitToDatabase() {
    return(
      <div>
        <button onClick={this.submitTeam}>Submit</button>
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

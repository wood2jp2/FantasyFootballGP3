import React from "react";
import "materialize-css";
import "react-materialize";

class TeamListPlayers extends React.Component {

  renderPlayersList() {
    const playersStatsList = [
      this.props.teamPlayers.name,
      this.props.teamPlayers.position,
      this.props.teamPlayers.teamAbbr,
      (this.props.teamPlayers.seasonPts).toFixed(2),
      (this.props.teamPlayers.seasonProjectedPts).toFixed(2),
      (this.props.teamPlayers.weekProjectedPts).toFixed(2)];

    return(
      playersStatsList.map((player, index) => (
        <td key={index} >{player}</td>
      ))
    );
  }

  renderEditOptions() {
    return(
      <td>
        <button onClick={this.props.deletePlayer}>Delete</button>
      </td>
    );
  }

  render() {
    return(
      <tr>
        {this.renderPlayersList()}
        {this.renderEditOptions()}
      </tr>
    );
  }
}

export default TeamListPlayers;

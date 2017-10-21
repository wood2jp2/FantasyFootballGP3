import React from "react";

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

  render() {
    return(
      <tr>
        {this.renderPlayersList()}
      </tr>
    );
  }
}

export default TeamListPlayers;

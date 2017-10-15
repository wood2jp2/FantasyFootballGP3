import React from "react";

class TeamListPlayers extends React.Component {

  renderPlayersList() {
    const playersStatsList = [
      this.props.starterPlayers.name,
      this.props.starterPlayers.position,
      this.props.starterPlayers.teamAbbr,
      this.props.starterPlayers.seasonPts,
      this.props.starterPlayers.seasonProjectedPts,
      this.props.starterPlayers.weekProjectedPts];

    return(
      playersStatsList.map((player, index) => (
        <td key={index}>{player}</td>
      ))
    );
  }

  renderOptions() {
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
        {this.renderOptions()}
      </tr>
    );
  }
}

export default TeamListPlayers;

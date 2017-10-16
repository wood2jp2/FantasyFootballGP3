import React from "react";

class TeamListPlayers extends React.Component {

  renderPlayersList() {
    const playersStatsList = [
      this.props.starterPlayers.name,
      this.props.starterPlayers.position,
      this.props.starterPlayers.teamAbbr,
      (this.props.starterPlayers.seasonPts).toFixed(2),
      (this.props.starterPlayers.seasonProjectedPts).toFixed(2),
      (this.props.starterPlayers.weekProjectedPts).toFixed(2)];

    return(
      playersStatsList.map((player, index) => (
        <td key={index} >{player}</td>
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

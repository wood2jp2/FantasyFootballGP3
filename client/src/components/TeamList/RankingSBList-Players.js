import React from "react";

class RankingSBListPlayers extends React.Component {

  renderPlayersList() {
    const playersStatsList = [
      this.props.teamData.name,
      this.props.teamData.position,
      this.props.teamData.teamAbbr,
      (this.props.teamData.seasonPts).toFixed(2),
      (this.props.teamData.seasonProjectedPts).toFixed(2),
      (this.props.teamData.weekProjectedPts).toFixed(2)];

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

export default RankingSBListPlayers;

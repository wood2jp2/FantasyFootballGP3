import React from "react";

class RankingKListPlayers extends React.Component {

  renderPlayersList() {
    const playersStatsList = [
      this.props.teamData.name,
      this.props.teamData.team,
      this.props.teamData.f30Pct,
      this.props.teamData.f40Pct,
      this.props.teamData.f50Pct,
      this.props.teamData.fandxPts
    ];

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

export default RankingKListPlayers;

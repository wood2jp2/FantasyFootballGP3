import React from "react";

class RankingListPlayers extends React.Component {

  renderPlayersList() {
    const playersStatsList = [
      this.props.teamData.name,
      this.props.teamData.team,
      this.props.teamData.compAtt,
      this.props.teamData.passYD,
      this.props.teamData.passTD,
      this.props.teamData.passInt,
      this.props.teamData.rushAtt,
      this.props.teamData.rushYD,
      this.props.teamData.rushTD,
      this.props.teamData.receptions,
      this.props.teamData.recYD,
      this.props.teamData.recTD,
      this.props.teamData.Pts
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

export default RankingListPlayers;

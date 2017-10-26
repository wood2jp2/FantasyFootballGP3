import React from "react";

class InjuriesListPlayers extends React.Component {

  renderInjuredList() {
    const playersInjuredList = [
      this.props.injuredData.name,
      this.props.injuredData.position,
      this.props.injuredData.status,
      this.props.injuredData.news,
      this.props.injuredData.injury
    ];

    return(
      playersInjuredList.map((player, index) => (
        <td key={index} >{player}</td>
      ))
    );
  }

  render() {
    return(
      <tr>
        {this.renderInjuredList()}
      </tr>
    );
  }
}

export default InjuriesListPlayers;

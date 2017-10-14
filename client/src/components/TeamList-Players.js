import React from "react";

class TeamListPlayers extends React.Component {

  renderPlayersList() {
    return(
      <td>{this.props.starterPlayers}</td>
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

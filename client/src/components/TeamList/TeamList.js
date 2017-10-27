import React from "react";
import "materialize-css";
import {Button, Icon} from "react-materialize";
import TeamListHeader from "./TeamList-Header";
import TeamListPlayers from "./TeamList-Players";

class TeamList extends React.Component {

  renderPlayers() {
    return this.props.teamPlayers.map((player, index) =>
      <TeamListPlayers key={index}
        teamData={player}
        deletePlayer={this.props.deletePlayer.bind(this, player)}
      />
    );
  }

  render() {
    return (
      <table className="table table-inverse">
        <TeamListHeader />
        <tbody>
          {this.renderPlayers()}
        </tbody>
      </table>
    );
  };
};

export default TeamList;

import React from "react";
import InjuriesListHeader from "./InjuriesList-Header"
import InjuriesListPlayers from "./InjuriesList-Players"

class InjuriesList extends React.Component {
  renderPlayers() {
    return this.props.injuredPlayers.map((player, index) =>
      <InjuriesListPlayers key={index}
        injuredData={player}
      />
    );
  }

  render() {
    return (
      <table className="table table-inverse">
        <InjuriesListHeader />
        <tbody>
          {this.renderPlayers()}
        </tbody>
      </table>
    );
  };
};

export default InjuriesList;

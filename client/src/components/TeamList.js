import React from "react";
import API from "../utils/API";
import PlayersSearch from "./PlayersSearch";

class TeamList extends React.Component {


  render() {
    return (
      <table>
        <thead>
        </thead>
          <tr>
            <th>Starters</th>
            <th>Position</th>
            <th>Team</th>
          </tr>
        <tbody>
        </tbody>
      </table>
    );
  }
}

export default TeamList;

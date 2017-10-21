import React from "react";
import "materialize-css";
import "react-materialize";
import AddPlayers from "../AddPlayers";
import Container from "../Wrappers/Container";
import TeamList from "../TeamList";
import API from "../../utils/API";
import "../Wrappers/Container.css";
import "./PlayersSearch.css";


const AllPlayers = props => {

  return (
    <div>
      <h3>NFL</h3>
      <table class ="striped bordered">
        <thead>
          <tr>
            <th>Starters</th>
            <th>Position</th>
            <th>Team</th>
            <th>Season Pts</th>
            <th>Season Projected Pts</th>
            <th>Week Projected Pts</th>
          </tr>
        </thead>
        <tbody>
          {props.results.map((player, index) => (
            <tr key={index}>
              <td>{player.name}</td>
              <td>{player.position}</td>
              <td>{player.teamAbbr}</td>
              <td>{player.seasonPts}</td>
              <td>{player.seasonProjectedPts}</td>
              <td>{player.weekProjectedPts}</td>
            </tr>
          ))};
        </tbody>
      </table>
    </div>
  );
};

export default AllPlayers;

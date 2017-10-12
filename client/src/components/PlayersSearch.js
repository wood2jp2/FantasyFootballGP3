import React, { Component } from "react";
import API from "../utils/API";

class PlayersSearch extends Component {
  state = {
    players: []
  };

  componentDidMount() {
    API.getPlayersList()
      .then(res => {
        console.log(res.data);
        this.setState({players: res.data.players})})
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <h3>NFL</h3>
        <table>
          <thead>
            <tr>
              <td>Starters</td>
              <td>Position</td>
              <td>Team</td>
              <td>Season Pts</td>
              <td>Season Projected Pts</td>
              <td>Week Projected Pts</td>        
            </tr>
          </thead>
          <tbody>
            {this.state.players.map((player, index) => (
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
};

export default PlayersSearch;

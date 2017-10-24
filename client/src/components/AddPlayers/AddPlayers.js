import React from "react";
import store from "../../Store";
import "materialize-css";
import "react-materialize";

class AddPlayers extends React.Component {

  handleInputChange = (e) => {
    e.preventDefault();
    this.props.addPlayer({playerSearch: e.target.value });
  };

  handlePayloadAction = (evt) => {
    evt.preventDefault();
    const selectedPlayer = store.getState().playerSearch;
    this.props.createTeam(selectedPlayer);
    this.props.addPlayer(this.props.newPlayer);
    this.refs.search.value = "";
  };

  render(){
    return (
      <form onSubmit={this.handlePayloadAction}>
        <input
          value={this.props.search}
          onChange={this.handleInputChange}
          name="player"
          list="playersNames"
          ref="search"
          type="text"
          placeholder="Add Players"
          id="player"
        />
        <datalist id="playersNames">
            {this.props.playersNames.map((player, index) => <option value={player} key={index} />)}
        </datalist>
        <button type="submit">Add</button>
      </form>
    );
  }
};

export default AddPlayers;

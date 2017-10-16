import React from "react";

class AddPlayers extends React.Component {

  handleAddingPlayers(e) {
    e.preventDefault();
    this.props.createTeam(this.refs.playerInput.value);
    this.refs.playerInput.value = "";
  }

  render() {
    return (
      <form onSubmit={this.handleAddingPlayers.bind(this)}>
        <input
          value={this.props.search}
          onChange={this.props.handleInputChange}
          name="player"
          list="playersNames"
          ref="playerInput"
          type="text"
          placeholder="Add Players"
          id="player"
        />
        <datalist id="playersNames">
          {this.props.playersNames.map(player => <option value={player} key={player} />)}
        </datalist>
        <button>Add</button>
      </form>
    );
  };
};

export default AddPlayers;

import { loadAddPlayer, LOAD_ADD_PLAYER } from "../actions/rankings-layout-actions";

const initialState = {
  playerSearch: "",
  playersNames: [],
  playersStats: [],
  starterPlayers: [],
  benchPlayers: [],
  payloadContainer: {}
};

const rankingsLayoutReducer = (state = initialState, action) => {
  switch(action.type) {
    case "LOAD_ADD_PLAYER":
      return Object.assign({}, state, action.payload);
    default:
      return state;
  }
};

export default rankingsLayoutReducer;

const initialState = {
  playerSearch: "",
  playersNames: [],
  playersStats: [],
  starterPlayers: [],
  benchPlayers: []
};

const rankingsLayoutReducer = (state = initialState, action) => {
  switch(action.type) {
    case "LOAD_SEARCH_UPDATE":
      return Object.assign({}, state, {
        playerSearch: action.payload.playerSearch}
      );
    case "LOAD_APIDATA_UPDATE":
      return Object.assign({}, state, {
        playersNames: action.payload.playersNames,
        playersStats: action.payload.playersStats}
      );
    case "LOAD_STARTER_UPDATE":
      return Object.assign({}, state, {
        starterPlayers: action.payload.starterPlayers}
      );
    case "LOAD_BENCH_UPDATE":
      return Object.assign({}, state, {
        benchPlayers: action.payload.benchPlayers}
      );
    default:
      return state;
  }
};

export default rankingsLayoutReducer;

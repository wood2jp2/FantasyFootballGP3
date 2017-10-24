export const LOAD_ADD_PLAYER = "LOAD_ADD_PLAYER";

export const loadAddPlayer = (team) => {
  return {
    type: LOAD_ADD_PLAYER,
    payload: team
  }
}

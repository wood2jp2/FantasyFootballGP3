import axios from "axios";

const weekx = 7;
const seasonx = 2017;
const urlx = "season=" + seasonx + "&week=" + weekx + "&format=json";

export default {
  getPlayersList: function() {
    return axios.get("http://api.fantasy.nfl.com/v1/players/stats?statType=seasonStats&" + urlx);
  },
  getSportsFeeds: function() {
    return axios.get("https://api.mysportsfeeds.com/v1.1/pull/nfl/2017-regular/cumulative_player_stats.json", {
      headers: {
        "Authorization": "Basic Z3dmYW50YXN5Zm9vdGJhbGw6Z3dmYW50YXN5"
      }
    });
  }
};

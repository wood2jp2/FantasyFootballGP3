import axios from "axios";

const weekx = 7;
const seasonx = 2017;
const urlx = "season=" + seasonx + "&week=" + weekx + "&format=json";

export default {
  getPlayersList: function() {
    return axios.get("http://api.fantasy.nfl.com/v1/players/stats?statType=seasonStats&" + urlx);
  }
};
/*
export default {
  getPlayersYahoo: function() {
    return axios.get("http://api.fantasy.nfl.com/v1/players/stats?statType=seasonStats&" + urlx);
  }
};
*/

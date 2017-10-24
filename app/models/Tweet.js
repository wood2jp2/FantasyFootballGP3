module.exports = function(sequelize, DataTypes) {

var Tweet = sequelize.define('tweet', {
  id: {
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
    },
  tweet: {
    type: DataTypes.STRING,
    notEmpty: true
  }
});

return Tweet;

}

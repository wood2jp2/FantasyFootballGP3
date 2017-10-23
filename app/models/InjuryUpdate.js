module.exports = function(sequelize, DataTypes) {

  var Injury = sequelize.define('injuryUpdate', {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    name: {
      type: DataTypes.STRING,
      notEmpty: true
    },
    position: {
      type: DataTypes.STRING,
      notEmpty: true
    },
    status: {
      type: DataTypes.STRING,
      notEmpty: true
    },
    news: {
      type: DataTypes.STRING,
    },
    injury: {
      type: DataTypes.STRING
    }
  });
  return Injury;
}

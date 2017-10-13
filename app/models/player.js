module.exports = function(sequelize, Sequelize){

  var Player = sequelize.define ('player', {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    fullName: {
      type: Sequelize.STRING,
      notEmpty: true
    },
    position: {
      type: Sequelize.STRING,
      notEmpty: true
    },
    team: {
      type: Sequelize.STRING
    },
    projectedPoints: {
      type: Sequelize.INTEGER
    },
    weekPoints: {
      type: Sequelize.INTEGER
    }
  });

  return Player;
}

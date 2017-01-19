'use strict';

module.exports = function(sequelize, DataTypes) {
  var Review = sequelize.define('Review', {
    description: {
      type: DataTypes.STRING
    },
    rating: {
      type: DataTypes.INTEGER 
    },
    date: {
      type: DataTypes.DATE
    }
  }, {
    classMethods: {
      associate: function(models) {
        Review.belongsTo(models.Restaurant)
      }
    }
  });
  return Review;
};
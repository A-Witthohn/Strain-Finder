const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// Define a model that maps to the table in the database
class Activity extends Model {}
Activity.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
},
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'activity',
  }
);

module.exports = Activity;

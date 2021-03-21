'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Lead extends Model {
    static associate(models) {
      Lead.hasMany(models.Appointment, { 
        foreignKey: 'lead_id', 
        as: 'appointments'
      });
    }
  };
  Lead.init({
    name: DataTypes.STRING,
    request_id: DataTypes.STRING,
    moving_date: DataTypes.DATE,
    shipment_mode: DataTypes.STRING,
    status: DataTypes.STRING,
    origin: DataTypes.STRING,
    destination: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Lead',
  });
  return Lead;
};
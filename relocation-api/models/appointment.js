'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Appointment extends Model {
    static associate(models) {
      Appointment.belongsTo(models.Lead, {
        foreignKey: "lead_id",
        as: "appointments"
      });
    }
  };
  Appointment.init({
    lead_id: DataTypes.INTEGER,
    appointment_date: DataTypes.DATE,
    request_status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Appointment',
  });
  return Appointment;
};
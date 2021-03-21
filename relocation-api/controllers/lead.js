var moment = require("moment-timezone");

const Lead = require("../models").Lead;
const Appointment = require("../models").Appointment;
const Sequelize = require("sequelize");

module.exports = {
  list(req, res) {
    return Lead.findAll({
      include: [
        {
          model: Appointment,
          as: "appointments",
        },
      ],
    }).then((leads) => {
      res.status(200);
      res.json({
        success: true,
        message: "success",
        leads,
      });
    });
  },

  getById(req, res) {
    return Lead.findById(req.params.id, {}).then((lead) => {
      if (lead) {
        res.status(200);
        res.json({
          success: true,
          message: "success",
          lead,
        });
      } else {
        res.status(200);
        res.json({
          success: true,
          message: "no data",
        });
      }
    });
  },
};

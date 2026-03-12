const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const DailyReport = sequelize.define("DailyReport",{
  project_id: DataTypes.INTEGER,
  user_id: DataTypes.INTEGER,
  date: DataTypes.DATEONLY,
  work_description: DataTypes.TEXT,
  weather: DataTypes.STRING,
  worker_count: DataTypes.INTEGER
},{
  tableName:"daily_reports",
  timestamps:false
});

module.exports = DailyReport;
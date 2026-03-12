const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Project = sequelize.define("Project",{
  name: DataTypes.STRING,
  description: DataTypes.TEXT,
  start_date: DataTypes.DATE,
  end_date: DataTypes.DATE,
  status: DataTypes.ENUM("planned","active","completed"),
  created_by: DataTypes.INTEGER
},{
  tableName:"projects",
  timestamps:false
});

module.exports = Project;
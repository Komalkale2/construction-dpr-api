const User = require("./user");
const Project = require("./project");
const DailyReport = require("./dailyReport");

User.hasMany(Project,{ foreignKey:"created_by"});
Project.belongsTo(User,{ foreignKey:"created_by"});

Project.hasMany(DailyReport,{ foreignKey:"project_id"});
DailyReport.belongsTo(Project,{ foreignKey:"project_id"});

User.hasMany(DailyReport,{ foreignKey:"user_id"});
DailyReport.belongsTo(User,{ foreignKey:"user_id"});

module.exports = { User, Project, DailyReport };
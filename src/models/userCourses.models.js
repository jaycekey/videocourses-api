const db = require("../utils/database");
const { DataTypes } = require("sequelize");

const UsersCourses = db.define("users_courses", 
{
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: "Users",
      key: "user_id",
    },
    field: "user_id"
  },
  courseId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: "Courses",
      key: "course_id",
    },
    field: "course_id"
  }
})

module.exports = UsersCourses;
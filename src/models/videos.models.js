const db = require("../utils/database");
const { DataTypes } = require("sequelize");

const Videos = db.define("videos", 
{
  videoId: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
    field: "video_id"
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  url: {
    type: DataTypes.STRING,
    allowNull: false
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

module.exports = Videos;
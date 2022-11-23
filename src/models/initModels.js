const { Users, Courses, UsersCourses, Videos, Categories } = require("./index");

const initModels = () => {
  UsersCourses.belongsTo(Users, { as: "student", foreignKey: "user_id" });
  Users.hasMany(UsersCourses, { as: "course", foreignKey: "user_id" });

  UsersCourses.belongsTo(Courses, { as: "course", foreignKey: "course_id" });
  Courses.hasMany(UsersCourses, { as: "student", foreignKey: "course_id" });

  Videos.belongsTo(Courses, {foreignKey: "course_id"});
  Courses.hasMany(Videos, { as: "lessons", foreignKey: "course_id"});

  Courses.belongsTo(Categories, {foreignKey: "category_id"});
  Categories.hasMany(Courses, {foreignKey: "category_id"});
};

module.exports = initModels;

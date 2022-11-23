const { userCreate, getUser, getUserWithCourses, patchUser } = require("./users.controllers");
const { courseCreate, patchCourse, getAllCourses } = require("./course.controllers");
const { categoryCreate, categoryDelete } = require("./category.controllers")
const { videoCreate, videoDelete } = require("./videos.controllers");

module.exports = {
  userCreate,
  getUser,
  getUserWithCourses,
  patchUser,

  getAllCourses,
  courseCreate,
  patchCourse,

  categoryCreate,
  categoryDelete,

  videoCreate,
  videoDelete,
};
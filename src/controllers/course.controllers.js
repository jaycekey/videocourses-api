const { CourseServices } = require("../services");

const getAllCourses = async (req, res, next) => {
  try {
    const result = await CourseServices.getAll();
    res.status(201).json(result);
  } catch (error) {
    next({
      status: 400,
      errorContent: error,
      message: "Please check the body from the request",
    });
  }
};

const courseCreate = async (req, res, next) => {
  try {
    const newCourse = req.body;
    const result = await CourseServices.create(newCourse);
    res.status(201).json(result);
  } catch (error) {
    next({
      status: 400,
      errorContent: error,
      message: "Please check the body from the request",
    });
  }
};

const patchCourse = async (req, res, next) => {
  try {
    const result = await CourseServices.patch(req);
    res.status(200).send("Description updated successfully");
  } catch (error) {
    next({
      status: 400,
      errorContent: error,
      message: "Please check the body from the request",
    });
  }
};

module.exports = {
  courseCreate,
  patchCourse,
  getAllCourses
};

const { UserServices } = require("../services");

const userCreate = async (req, res, next) => {
  try {
    const newUser = req.body;
    const result = await UserServices.create(newUser);
    res.status(201).json(result);
  } catch (error) {
    next({
      status: 400,
      errorContent: error,
      message: "Missing user data, please check the body from the request",
    });
  }
};

const getUser = async (req, res, next) => {
  try {
    const result = await UserServices.get(req);
    res.status(200).json(result);
  } catch (error) {
    next({
      status: 400,
      errorContent: error,
      message: "Please check the body from the request",
    });
  }
};

const getUserWithCourses = async (req, res, next) => {
  try {
    const result = await UserServices.getWithCourses(req);
    res.status(200).json(result);
  } catch (error) {
    next({
      status: 400,
      errorContent: error,
      message: "Please check the body from the request",
    });
  }
};

const patchUser = async (req, res, next) => {
  try {
    const result = await UserServices.patch(req);
    res.status(200).send("Field updated successfully");
  } catch (error){
    next({
      status: 400,
      errorContent: error,
      message: "Please check the body from the request",
    });
  }
};

module.exports = {
  userCreate,
  getUser,
  getUserWithCourses,
  patchUser,
};

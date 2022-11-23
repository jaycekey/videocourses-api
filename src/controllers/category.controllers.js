const { CategoryServices } = require("../services");

const categoryCreate = async (req, res, next) => {
  try {
    const newCategory = req.body;
    const result = await CategoryServices.create(newCategory);
    res.status(201).json(result);
  } catch (error) {
    next({
      status: 400,
      errorContent: error,
      message: "Please check the body from the request"
    });
  }
};

const categoryDelete = async (req, res, next) => {
  try {
    const result = await CategoryServices.delete(req);
    res.status(204).json(result);
  } catch (error) {
    next({
      status: 400,
      errorContent: error,
      message: "Please check the body from the request"
    });
  }
}

module.exports = {
  categoryCreate,
  categoryDelete,
}
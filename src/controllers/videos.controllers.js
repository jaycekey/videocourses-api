const { VideosServices } = require("../services");

const videoCreate = async (req, res, next) => {
  try {
    const newVideo = req.body;
    const result = await VideosServices.create(newVideo);
    res.status(201).json(result);
  } catch (error) {
    next({
      status: 400,
      errorContent: error,
      message: "Please check the body from the request"
    });
  }
};

const videoDelete = async (req, res, next) => {
  try {
    const result = await VideosServices.delete(req);
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
  videoCreate,
  videoDelete,
}
const { Videos } = require("../models");

class VideosServices {
  static async create(video) {
    try {
      const result = await Videos.create(video);
    } catch (error) {
      throw error;
    }
  }
  static async delete(req) {
    try {
      const { id } = req.body;
      await Videos.destroy({where: {videoId: id}});
    } catch (error) {
      throw error;
    }
  }
}

module.exports = VideosServices;
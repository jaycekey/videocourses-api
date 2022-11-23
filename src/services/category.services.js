const { Categories } = require("../models");

class CategoryServices {
  static async create(category) {
    try {
      const result = await Categories.create(category);
    } catch (error) {
      throw error;
    }
  }
  static async delete(req) {
    try {
      const { id } = req.body;
      await Categories.destroy({where: {categoryId: id}});
    } catch (error) {
      throw error;
    }
  }
}

module.exports = CategoryServices;
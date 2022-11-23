const { Courses } = require("../models");

class CourseServices {
  static async getAll() {
    try {
      const courses = Courses.findAll();
      return courses;
    } catch (error) {
      throw error;
    }
  }
  static async create(course) {
    try {
      const result = await Courses.create(course);
    } catch (error) {
      throw error;
    }
  }
  static async patch(req) {
    try {
      const { id, description } = req.body;
      if (description) {
        const course = await Courses.update(
          {
            description: description,
          },
          {
            where: { courseId: id },
          }
        );
        return course;
      } else {
        throw error;
      }
    } catch (error) {
      throw error;
    }
  }
}

module.exports = CourseServices;

const { Users, Courses } = require("../models");

class UserServices {
  static async create(user) {
    try {
      const result = await Users.create(user);
    } catch (error) {
      throw error;
    }
  }
  static async get(req) {
    try {
      const { id } = req.params;
      const user = await Users.findOne({
        where: { userId: id },
        attributes: {
          exclude: ["password", "createdAt", "updatedAt"],
        },
      });
      return user;
    } catch (error) {
      throw error;
    }
  }
  static async getWithCourses(req) {
    try {
      const { id } = req.params;
      const user = await Users.findOne({
        where: { userId: id },
        include: [
          {
            model: Courses,
            as: "courses",
          },
        ],
        attributes: {
          exclude: ["password", "createdAt", "updatedAt"],
        },
      });
      return user;
    } catch (error) {
      throw error;
    }
  }
  static async patch(req) {
    try {
      const { id, firstName, lastname, password } = req.body;
      if (firstName) {
        const user = await Users.update(
          {
            firstName: firstName,
          },
          {
            where: { userId: id },
          }
        );
        return user;
      } else if (lastname) {
        const user = await Users.update(
          {
            lastname: lastname,
          },
          {
            where: { userId: id },
          }
        );
        return user;
      } else if (password) {
        const user = await Users.update(
          {
            password: password,
          },
          {
            where: { userId: id },
          }
        );
        return user;
      } else {
        throw error;
      }
    } catch (error) {
      throw error;
    }
  }
}

module.exports = UserServices;

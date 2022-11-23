const db = require("../utils/database");
const { DataTypes } = require("sequelize");

const Categories = db.define("categories", 
{
  categoryId: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
    field: "category_id"
  },
  categoryName : {
    type: DataTypes.STRING,
    allowNull: false,
    field: "category_name"
  },
})

module.exports = Categories;
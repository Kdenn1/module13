// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// set up fields and rules for Product model
Product.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    product_name: {
      string: true,
      allowNull: false
    },
    price: {
      // need to add decimal as a value, this may or may not be correct 
      Number: VARCHAR(20),
      allowNull: false,
      decimal: true
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
      // not sure if default value declaration or isnumeric declarations are valid 
      DEFAULT: 10,
      ISNUMERIC: true
    },
    category_id: {
      type: DataTypes.INTEGER,
      // still need to reference the category model's id somehow 
      
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Product;

// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsto(Category, {
  foreignKey: 'product_name'
});
// Categories have many Products
Category.hasMany(Product, {
  foreignKey: 'category_name'
});
// Products belongToMany Tags (through ProductTag)
Product.belongToMany(ProductTag, {
  foreignKey: 'tag_name'
});
// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(ProductTag)

// module exports section 
module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};

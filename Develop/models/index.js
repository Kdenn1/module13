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
Product.belongsToMany(Tag, {
  foreignKey: 'tag_name'
});
// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(ProductTag, {
  foreignKey: 'tag_id'
});

// module exports section 
module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};

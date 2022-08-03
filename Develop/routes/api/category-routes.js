const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories and be sure to include its associated Products
  //going to use a try statement and a catch for err
  try { 
        const categoryData = await Category.findAll({
          include: [{ model: Product }],
        });
        res.status(200).json(categoryData);
  } //err catch 
  catch (err) {
    res.status(500).json(err);
  }
});

//follow the same model as above for the rest of the requests 
router.get('/:id', (req, res) => {
  // find one category by its `id` value and be sure to include its associated Products
  try {
    const categoryData = await Category.findByPk(req.params.id, {
      include: [{ model: Product }],
    });
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', (req, res) => {
  // create a new category
  try {
    const categoryData = await Category.create(req.body);
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  try {
    const categoryData = await Category.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    //if statement on the data recieved 
    if (!categoryData[0]) {
      res.status(404).json({ message: 'Pick a category with a valid ID'});
      return;
    }
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  try {
    const categoryData = await Category.destroy({
      where: {
        id: req.params.id,
      },
    });
    //if statement for if a nonvalid category is selected + return
    if (!categoryData) {
      res.status(404).json({ message: 'Please pick a category with a valid ID' });
      return;
    }
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;

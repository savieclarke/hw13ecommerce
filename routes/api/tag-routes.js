const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  // find all tags
  Tag.findAll({
    include: [
      [Product,
      
      {
        model: Product,
        through: ProductTag
      }],
     
    ],
  })
    .then((category) => res.json(category))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
  // be sure to include its associated Product data
});

router.get('/:id', (req, res) => {
  // find a single tag by its `id`
  Tag.findAll({
    where:{
      id: req.params.id,
    },
    include: [
      Product],

    })
    .then((category) => res.json(category))
    .catch((err) => res.status(400).json(err));
  
  // be sure to include its associated Product data
});

router.post('/', (req, res) => {
  // create a new tag
  Tag.create ({req,res})
  .then((category) => res.json(category))
  .catch((err) => res.status(400).json(err));

});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
  Tag.update
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
  Tag.destroy({
    where: {
      id: req.params.id
    }
  })
  .then((tag) => res.status(200).json(Tag))
  .catch((err) => res.status(400).json(err));
  })


module.exports = router;

// require the model
const store = require('../models/store');

// async method that uses the functions in the model.
const getStore = async (req, res) => {
  const response = await store.findAll();
  if (response) {
    res.send(response);
  }
};

const getProductById = async (req, res) => {
  const id = parseInt(req.params.id, 10);
  const response = await store.findById(id);
  if (response) {
    res.send(response);
  }
};

const createProduct = async (req, res) => {
  const schema = Joi.object({
    product: Joi.string().min(4).required(),
    seller: Joi.string().min(4).required(),
    price: Joi.string().min(4).required(),
    image: Joi.string()
  });
  const { error } = schema.validate(req.body);
  if(error) {
    res.status(400).send(error.details[0].message);
    return;
  }
  const store = {
    product: req.body.product,
    seller: req.body.seller,
    price: req.body.price,
    image: req.body.image
  }
}

const updateProduct = async (req, res) => {
  const store = {
    id: req.body.id,
    name: req.body.name,
    product: req.body.product,
  };
  const response = await store.updateById(store);
  if (response) {
    res.send(store);
  }
};

const deleteProduct = async (req, res) => {
  const id = parseInt(req.params.id, 10);
  const response = await store.deleteById(id);
  if (response) {
    res.send('product deleted');
  }
};

// export named functions
module.exports = {
  createProduct,
  deleteProduct,
  getStore,
  getProductById,
  updateProduct,
};

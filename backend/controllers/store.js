// require the model
const Joi = require('joi');
const stores = require('../models/store');

// async method that uses the functions in the model.
const getStore = async (req, res) => {
  const response = await stores.findAll();
  if (response) {
    res.send(response);
  }
};

const getProductById = async (req, res) => {
  const id = req.params.id;
  const response = await stores.findById(id);
  if (response) {
    res.send(response);
  }
};

const getProductByName = async (req, res) => {
  //console.log("Mitä tulloo",req.params.name)
  const seller = req.params.name;
  const response = await stores.findByName(seller);
  if (response) {
    res.send(response);
  }
};

const createProduct = async (req, res) => {
  const schema = Joi.object({
    product: Joi.string().min(4).required(),
    seller: Joi.string().required(),
    price: Joi.string().required(),
    image: Joi.string(),
    tunnus: Joi.string()
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
    image: req.body.image,
    tunnus: req.body.tunnus
  }
  try {
    const result = await stores.findByStore(store);
    if(result.length > 0) {
      res.status(400).send('Product is in the database already');
      return;
    }
    const response = await stores.create(store);
    if(response) {
      store.id = response.insertId;
      res.status(201).send(store);
    }
  } catch (err) {
    console.log(err);
    res.status(500).send("Something went wrong");
  }

};

const deleteProduct = async (req, res) => {
  const id = parseInt(req.params.id, 10);
  const response = await stores.deleteById(id);
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
  getProductByName
};

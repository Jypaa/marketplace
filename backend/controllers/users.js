const bcrypt = require('bcryptjs');
const { v4 } = require('uuid');
const jwt = require('jsonwebtoken');

const users = require('../models/users');

const signUpUser = async (req, res) => {
  const { name, email, password} = req.body;

  let hashedPassword;
  try {
    hashedPassword = await bcrypt.hash(password, 12);
  } catch (err) {
    return res.status(500).send('Could not create user, try again please');
  }

  const newUser = {
    id: v4(),
    name,
    email,
    password: hashedPassword
  };

  try {
    const exist = await users.findByEmail(newUser.email);
    if(exist.length > 0) {
      return res.status(422).send('Could create user, user exists');
    }

    const result = await users.create(newUser);
    if(!result) {
      return res.status(500).send('Could not create user, try again please');
    }

    const token = jwt.sign(
      {
        id: newUser.id,
        email: newUser.email
      },
      process.env.JWT_KEY,
      { expiresIn: '1h' }
    );

    res.status(201).json({
      id: newUser.id,
      email: newUser.email,
      token
    })

  } catch (err) {
    return res.status(500).send('Could not create user, try again please');
  }
};

const loginUser = async (req, res) => {
  const {email, password} = req.body;
  
  let identifiedUser;
  try {
    const result = await users.findByEmail(email);
    if(!result[0]) {
      return res.status(401).send('No user found - Check your credentials');
    }
    identifiedUser = result[0];
  } catch (err) {
    return res.status(500).send('Something went wrong');
  }

  let isValidPassword;
  try {
    isValidPassword = await bcrypt.compare(password, identifiedUser.password);
    if(!isValidPassword) {
      return res.status(401).send('No user found - Check your credentials');
    }
  } catch (err) {
    return res.status(500).send('Something went wrong');
  }

  try {
    const token = jwt.sign(
      {
        id: identifiedUser.id,
        email: identifiedUser.email
      },
      process.env.JWT_KEY,
      { expiresIn: '1h' }
    );

    res.status(201).json({
      id: identifiedUser.id,
      email: identifiedUser.email,
      token
    })
  } catch (err) {
    return res.status(500).send('Something went wrong');
  }


};

const getUserById = async (req, res) => {
  
  const id = req.params.id;
  //console.log("se id",req.params.id)
  //console.log("se id intti",id)
  const response = await users.findById(id);
  if (response) {
    res.send(response);
  }
};

module.exports = {
  loginUser,
  signUpUser,
  getUserById
}

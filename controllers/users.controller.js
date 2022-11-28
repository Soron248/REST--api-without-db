const { v4: uuidv4 } = require("uuid");
let userData = require("../models/users.model");

// get user data
exports.getUsers = (req, res) => {
  res.status(200).json({ userData });
};

// create user data
exports.postUser = (req, res) => {
  const newUser = {
    id: uuidv4(),
    userName: req.body.userName,
    email: req.body.email,
  };
  userData.push(newUser);
  res.status(201).json({ userData });
};

// update user data
exports.putUser = (req, res) => {
  const reqID = req.params.id;
  const { userName, email } = req.body;
  userData
    .filter((data) => data.id === reqID)
    .map((sdata) => {
      sdata.userName = userName;
      sdata.email = email;
    });
  res.status(200).json({ userData });
};

// delete user data
exports.deleteUser = (req, res) => {
  const reqID = req.params.id;
  userData = userData.filter((data) => data.id !== reqID);
  res.status(200).json({ userData });
};

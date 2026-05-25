const express = require("express");

const router = express.Router();

const user = require("../models/user");

// register

router.post("/register", async (req, res) => {
  try {

    const newuser = new user({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password
    });

    await newuser.save();

    res.send("user registered successfully");

  } catch (error) {
    res.send(error);
  }
});

// login

router.post("/login", async (req, res) => {
  try {

    const founduser = await user.findOne({
      email: req.body.email,
      password: req.body.password
    });

    if (founduser) {
      res.send("login successful");
    } else {
      res.send("invalid email or password");
    }

  } catch (error) {
    res.send(error);
  }
});

module.exports = router;
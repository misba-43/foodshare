
const express = require("express");

const router = express.Router();

const food = require("../models/food");

// add food

router.post("/addfood", async (req, res) => {

  try {

    const newfood = new food({

      foodname: req.body.foodname,
      quantity: req.body.quantity,
      expirytime: req.body.expirytime

    });

    await newfood.save();

    res.send("food added successfully");

  } catch (error) {

    console.log(error);

    res.send("error adding food");

  }

});

// get all foods

router.get("/allfoods", async (req, res) => {

  try {

    const foods = await food.find();

    res.json(foods);

  } catch (error) {

    console.log(error);

    res.send("error fetching foods");

  }

});

module.exports = router;
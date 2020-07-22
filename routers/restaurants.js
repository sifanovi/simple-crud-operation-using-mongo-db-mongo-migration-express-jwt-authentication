const express = require("express");
const Restaurants = require("../models/restaurants");
const router = new express.Router();
const auth = require('../middleware/auth')
router.post("/restaurants",auth, async (req, res) => {
  
  const restaurants = new Restaurants({
    ...req.body,
    owner:req.user._id});

  restaurants.createdAt = new Date();
  restaurants.updatedAt=new Date();
  try {
    await restaurants.save();
    res.status(201).send(restaurants);
  } catch (e) {
    res.status(400).send(e);
  }
});

router.get("/restaurants",auth, async (req, res) => {
  try {
    const restaurants = await Restaurants.find({});
    res.send(restaurants);
  } catch (e) {
    res.status(500).send();
  }
});

router.get("/restaurants/:id",auth, async (req, res) => {
  const _id = req.params.id;

  try {
    const restaurants = await Restaurants.findById(_id);

    if (!restaurants) {
      return res.status(404).send();
    }

    res.send(restaurants);
  } catch (e) {
    res.status(500).send();
  }
});

router.patch("/restaurants/:id",auth,async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = [
    "name",
    "phone_number",
    "contact_person",
    "email",
    "address",
  ];
  const isValidOperation = updates.every((update) =>
    allowedUpdates.includes(update)
  );

  if (!isValidOperation) {
    return res.status(400).send({ error: "Invalid updates!" });
  }

  try {
    const restaurants = await Restaurants.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!restaurants) {
      return res.status(404).send();
    }

    res.send(restaurants);
  } catch (e) {
    res.status(400).send(e);
  }
});

router.delete("/restaurants/:id",auth, async (req, res) => {
  try {
    const restaurants = await Restaurants.findByIdAndDelete(req.params.id);

    if (!restaurants) {
      res.status(404).send();
    }

    res.send(restaurants);
  } catch (e) {
    res.status(500).send();
  }
});

module.exports = router;

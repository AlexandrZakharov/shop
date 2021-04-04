const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Product = mongoose.model("Product");

router.post("/createproduct", (req, res) => {
  const {
    type,
    link,
    releaseDate,
    name,
    manufacturer,
    images,
    description,
    rating,
    minPrice,
    configurations,
    colors,
  } = req.body;
  if (
    !type ||
    !link ||
    !releaseDate ||
    !name ||
    !manufacturer ||
    !images ||
    !description ||
    !minPrice ||
    !colors
  ) {
    return res.status(442).json({ error: "please add all the fields" });
  }
  Product.findOne({ link }).then((p) => {
    if (p) {
      return res
        .status(442)
        .json({ error: "This product has already been created" });
    }
    const product = new Product({
      type,
      link,
      releaseDate,
      name,
      manufacturer,
      images,
      description,
      rating,
      minPrice,
      configurations,
      colors,
    });

    product
      .save()
      .then((result) => {
        return res.json({ product: result });
      })
      .catch((err) => {
        return res.status(442).json(err);
      });
  });
});

router.get("/getproduct/:link", (req, res) => {
  if (!req.params.link) {
    return res.status(442).json({ error: "You did not provide a link" });
  }
  Product.findOne({ link: req.params.link }).then((product) => {
    if (product) {
      res.json(product);
    } else {
      return res
        .status(442)
        .json({ error: "Page not found" });
    }
  });
});

router.get("/getproducts/:type", (req, res) => {
  Product.find({ type: req.params.type })
    .then((products) => {
      res.json(products);
    })
    .catch((error) => {
      return res.status(442).json({ error });
    });
});

module.exports = router;

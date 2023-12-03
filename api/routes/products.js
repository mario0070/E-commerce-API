const express = require("express")
const route = express.Router()
const productSchema = require("../models/productModel")

route.get("/", (req, res) => {
   productSchema.find()
   .then(data => {
        res.status(200).json({
            message: "All products",
            data
        })
   })
})

route.post("/", (req, res) => {
    const products = new productSchema({
        name : req.body.name,
        price : req.body.price,
    })

    products.save()
    .then((result) => {
        res.status(200).json({
            message: "successfully created products",
            products : result
        })
    })
    .catch(err => {
        res.status(403).json({
            message: err
        })
    })
})

route.get("/:id", (req, res) => {
    productSchema.findById(req.params.id)
    .then(data => {
         res.status(200).json({
             message : "product details",
             data
         })
    })
    .catch(err => {
         res.status(404).json({
             message : err
         })
    })
 })

route.delete("/:id", (req, res) => {
   productSchema.findByIdAndDelete(req.params.id)
   .then(data => {
        res.status(200).json({
            message : "deleted",
        })
   })
   .catch(err => {
        res.status(404).json({
            message : err
        })
   })
})

route.patch("/:id", (req, res) => {
  productSchema.findByIdAndUpdate(req.params.id,{name: req.body.name, price : req.body.price})
  .then(data => {
    res.status(200).json({
        message : "product updated successfully",
        data
    })
  })
  .catch(err => {
    res.status(404).json({
        message : err,
    })
  })
})

module.exports = route
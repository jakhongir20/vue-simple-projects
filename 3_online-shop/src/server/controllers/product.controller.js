const Product = require('../models/product.model');

module.exports.create = async (req, res) => {
   const product = new Product({
      title: req.body.title,
      category: req.body.category,
      price: req.body.price,
      rate: req.body.rate,
      imageUrl: req.body.imageUrl,
      description: req.body.description
   });

   try {
      await product.save();
      res.status(201).json(product);
   } catch (err) {
      res.status(500).json(err);
   }
}

module.exports.getAll = async (req, res) => {
   try {
      const products = await Product.find().sort({date: -1}); // sort by date
      res.json(products);
   } catch (err) {
      res.status(500).json(err);
   }
}

module.exports.getById = async (req, res) => {
   try {
     await Product.findById(req.params.id).populate('reviews').exec((error, product) => {
         res.json(product)
      });
   } catch (err) {
      res.status(500).json(err);
   }
}

module.exports.update = async (req, res) => {
   const $set = {
      title: req.body.title
   }
   try {
      const product = await Product.findOneAndUpdate({
         _id: req.params.id
      }, {$set}, {new: true});
      res.json(product)
   } catch (err) {
      res.status(500).json(err);
   }
}

module.exports.remove = async (req, res) => {
   try {
      await Product.deleteOne({_id: req.params.id});
      res.json({message: 'Product deleted'})
   } catch (err) {
      res.status(500).json(err);
   }
}

module.exports.addView = async (req, res) => {
   const $set = {
      views: ++req.body.views
   }
   try {
      await Product.findOneAndUpdate({_id: req.params.id}, {$set});
      res.stale(204).json();
   } catch (err) {
      res.status(500).json(err);
   }
}

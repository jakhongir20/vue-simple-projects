const Review = require('../models/review.model');
const Product = require('../models/product.model');

module.exports.create = async (req, res) => {
   try {
      const {name, comment, rate, email, productId} = req.body;
      const review = new Review({name, comment, rate, email, productId});

      await review.save();

      const product = await Product.findById(productId);
      product.reviews.push(review._id);
      await product.save();

      res.status(201).json(review);

   } catch (err) {
      res.status(500).json(err);
   }
}

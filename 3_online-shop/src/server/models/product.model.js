const {model, Schema} = require('mongoose');

const productSchema = new Schema({
   title: {
      type: String,
      required: true
   },
   category: {
      type: String,
      required: true
   },
   price: {
      type: Number,
      required: true
   },
   rate: {
      type: String,
      default: 1
   },
   views: {
      type: Number,
      default: 0
   },
   imageUrl: {
      type: String,
      required: true
   },
   description: {
      type: String,
      required: true
   },
   reviews: [
      {
         type: Schema.Types.ObjectId,
         ref: 'reviews'
      }
   ]

});


module.exports = model('products', productSchema);

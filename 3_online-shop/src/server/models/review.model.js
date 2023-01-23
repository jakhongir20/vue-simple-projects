const {model, Schema} = require('mongoose');

const reviewSchema = new Schema({
   name: {
      type: String,
      required: true
   },
   email: {
      type: String,
      required: true
   },
   comment: {
      type: String,
      required: true
   },
   rate: {
      type: Number,
      default: 1
   },
   date: {
      type: Date,
      default: Date.now
   },
   productId: {
      ref: 'products',
      type: Schema.Types.ObjectId
   }
});


module.exports = model('reviews', reviewSchema);

const mongoose = require('mongoose'); // Erase if already required
const { ObjectId } = mongoose.Schema.Types;

// Declare the Schema of the Mongo model
var carSchema = new mongoose.Schema(
    {
        userId:{
          type:mongoose.Schema.Types.ObjectId,
          ref:'User'
        },
        productId:{
          type:mongoose.Schema.Types.ObjectId,
          ref:'Product'
        },
        quantity:{
          type:Number,
          required:true
        },
        price:{
          type:Number,
          required:true
        },
        color:{
          type:mongoose.Schema.Types.ObjectId,
          ref:'Color'
        }
      },
      {
        timestamps: true,
      },
);
//Export the model
module.exports = mongoose.model('Car', carSchema);
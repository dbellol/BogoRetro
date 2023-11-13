const mongoose = require('mongoose'); // Erase if already required
const { ObjectId } = mongoose.Schema.Types;

// Declare the Schema of the Mongo model
var carSchema = new mongoose.Schema(
    {
        products: [
          {
            product: {
              type: mongoose.Schema.Types.ObjectId,
              ref: "Product",
            },
            count: Number,
            color: String,
            price: Number,
          },
        ],
        carTotal: Number,
        totalAfterDiscount: Number,
        orderby: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
        },
      },
      {
        timestamps: true,
      },
);
//Export the model
module.exports = mongoose.model('Car', carSchema);
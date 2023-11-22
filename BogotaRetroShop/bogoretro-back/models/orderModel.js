const mongoose = require('mongoose'); // Erase if already required
const { ObjectId } = mongoose.Schema.Types;
// Declare the Schema of the Mongo model
var orderSchema = new mongoose.Schema({
   products:[
    {
        product: {
            type: ObjectId,
            ref: "Product",
        },
        count:Number,
        color:String,
    },
   ],
   paymentIntent:{},
   orderStatus:{
    type:String,
    default: "No procesado",
    enum:["No procesado", "Pago contra entrega", "Procesando","Despachado","Cancelado","Entregado"],
   },
   orderby:{
    type: ObjectId,
        ref: "User",
   },
},{
    timestamps:true,
});

//Export the model
module.exports = mongoose.model('Order', orderSchema);
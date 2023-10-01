const mongoose = require('mongoose'); // Erase if already required
const { ObjectId } = mongoose.Types;
const validateMongoId=(id)=>{
    const isValid=ObjectId.isValid(id);
    if(!isValid) throw new Error('Esta id no es valida o no se encontro');

}
module.exports={validateMongoId};
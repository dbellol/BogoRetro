const mongoose = require("mongoose");
/*Validación de colecciones y registros en mongo DB*/
const validateMongoId = (id) => {
  const isValid = mongoose.Types.ObjectId.isValid(id);
  if (!isValid) throw new Error("This id is not valid or not Found");
};
module.exports = validateMongoId;
const jwt = require("jsonwebtoken");
/*Generacion de un token que expira en 3d, con JWT*/

const generateToken = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET, {expiresIn:"1d"});
}
module.exports = {generateToken};
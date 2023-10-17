const jwt = require("jsonwebtoken");
/*RE-Generacion de un token que expira en 3d, con JWT*/
const generateRefreshToken = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET, {expiresIn:"3d"});
}
module.exports = {generateRefreshToken};
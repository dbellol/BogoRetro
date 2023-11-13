const { default: mongoose } = require("mongoose");
/*Conexion de la BD con mongoose*/
const dbConnect = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("DB conectada");
    } catch (error) {
        console.error("Error al conectar a DB:", error.message);
    }
};

module.exports = dbConnect;

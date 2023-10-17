const mongoose = require('mongoose'); // Erase if already required
const bcrypt = require('bcrypt');
const crypto = require('crypto');
const { ObjectId } = mongoose.Schema.Types;
// Declare the Schema of the Mongo model
var userSchema = new mongoose.Schema({
    firstname:{
        type:String,
        required:true,
        unique:true,
        index:true,
    },
    lastname:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    mobile:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    },
    role:{
        type: String,
        default: "user",
    },
    isBlocked:{
        type: Boolean,
        default:false,
    },
    cart:{
        type: Array,
        default:[],
    },
    address:{
      type:String,  
    },
    wishlist:[{type: ObjectId, ref:"Product"}],
    refreshToken:{
        type:String,
    },
    passwordChangeAt: Date,
    passwordResetToken: String,
    passwordResetExpires: Date,
},{
    timestamps:true,
    }
);
//Encriptar la contraseña
userSchema.pre('save',async function(next){
    if(!this.isModified("password")){
        next();
    }
    const salt=await bcrypt.genSaltSync(10);
    this.password = await bcrypt.hash(this.password, salt);
});
//Match con el password
userSchema.methods.isPasswordMatched = async function(enteredPassword){
    return await bcrypt.compare(enteredPassword, this.password);
};
userSchema.methods.createPasswordResetToken=async function(){
    const resetToken=crypto.randomBytes(32).toString("hex");
    this.passwordResetToken=crypto.createHash("sha256").update(resetToken).digest("hex");
    this.passwordResetExpires=Date.now()+30*60*1000; //10minutes
    return resetToken;
};
//Export the model
module.exports = mongoose.model('User', userSchema);
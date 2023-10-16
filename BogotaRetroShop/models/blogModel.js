const mongoose = require('mongoose'); // Erase if already required
const { ObjectId } = mongoose.Schema.Types;

// Declare the Schema of the Mongo model
var blogSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
        unique:true,
    },
    decription:{
        type:String,
        required:true,
    },
    category:{
        type:String,
        required:true,
        unique:true,
    },
    numViews:{
        type: Number,
        default:0,
    },
    isLiked:{
        type:Boolean,
        default: false,
    },
    isDisLiked:{
        type:Boolean,
        default: false,
    },
    likes:{
        type:mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    disLikes:{
        type:mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    image:{
        type: String,
        default:"https://blueandgreentomorrow.com/wp-content/uploads/2018/06/green-blogging.jpg",
    },
    author:{
        type: String,
        default: "Admin",
    },
},{
    toJSON:{
        virtuals: true,
    },
    toObject:{
        virtuals: true,
    },
    timestamps: true,
});

//Export the model
module.exports = mongoose.model('Blog', blogSchema);
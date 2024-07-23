const mongoose = require("mongoose")

const EmplSchema = new mongoose.Schema({
    fullname: String,
    email:{
        type:String,
        unique:true
    },
    password:String,
    address: String,
    pincode: Number,
    phonenumber:{
        type:Number,
        unique:true
    }
});

const UserDetail = new mongoose.model("UserDetail", EmplSchema);

module.exports = UserDetail;
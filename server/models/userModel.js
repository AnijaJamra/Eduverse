const { mongoose } = require("mongoose");

const userSchema = new mongoose.Schema({

    name : {
        type : String,
        required : [ true, "Please Provide Name"]
    },
    email : {
        type : String,
        unique : true,
        required : [ true, "Please Provide Email"]
    },
    phone : {
        type : String,
        unique : true,
        required : [ true, "Please Provide Phone"]
    },
    password : {
         type : String,
         required : [ true, "Please Provide Password"]
    },
    isAdmin : {
        type : Boolean,
        required :true,
        default : false
    },
    isActive : {
         type : Boolean,
        required :true,
        default : true
    }
}, { 
    timestamps : true
})


module.exports = mongoose.model('User', userSchema)
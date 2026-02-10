 const   mongoose  = require("mongoose");


const listingSchema = new mongoose.Schema({
    title : {
        type : String,
        required : [true, "Please Fill Product Name "]
    },
    description : {
          type : String,
        required : [true, "Please Fill Product Description "]
    },
    price : {
        type : Number,
        required : [true, "Please Fill Product Price "]
    },
    isAvailable : {
        type : Boolean,
        default : true,
        required : true
    },
    itemImage : {
        type : String,
        required : [true, "Please Fill Product Image "]
    },
    user : {
        type : mongoose.Schema.Types.ObjectId,
         ref: 'User',
        required : [true, "Please Fill Product Name "]
    }

}, {
    timestamps : true
})


module.exports = mongoose.model('Listing', listingSchema)





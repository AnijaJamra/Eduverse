const   mongoose  = require("mongoose")

const connenctDB = async()=> {
    try {
        const conn = await mongoose.connect(process.env.MONGO_DB)
        console.log(`DB CONNECTION SUCCESS : ${conn.connection.name}`.bgGreen.black);
        
    } catch (error) {
        console.log(`DB CONNECTION FAILED : ${error.message}`.bgRed.black);
        
    }
}

module.exports = connenctDB
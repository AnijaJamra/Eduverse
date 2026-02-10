const express = require('express')
require('dotenv').config()
const path = require('path')
const colors = require('colors')
const connenctDB = require('./config/dbConfig')
const errorHandler = require('./middleware/errorHandler')
 
const PORT = process.env.PORT || 5000
const app = express()
 
// DB Connection
connenctDB()
 
// Body Parser
app.use(express.json())
app.use(express.urlencoded());
 
 
// Home Route
app.get("/", (req, res) => {
    res.json({
        msg: "WELCOME TO EDUVERSE API 2.0"
    })
})
 
// Default Route
if (process.env.NODE_ENV === "production") {
    const __dirname = path.resolve();
    app.use(express.static(path.join(__dirname, "/client/dist")));
 
    app.get("/", (req, res) =>
        res.sendFile(path.resolve(__dirname, "client", "dist", "index.html"))
    );
} else {
    app.get("/", (req, res) => {
        res.send("API is running... (development mode)");
    });
}
 
// Auth Routes
app.use("/api/auth", require("./routes/authRoutes"))
 
// Listing Routes
app.use("/api/products", require("./routes/productRoutes"))
 
// Message Routes
app.use("/api/messages", require("./routes/messageRoutes"))
 
// Event Routes
app.use("/api/events", require("./routes/eventRoutes"))
 
// Admin Routes
app.use("/api/admin", require("./routes/adminRoutes"))
 
// Error Handler
app.use(errorHandler)
 
app.listen(PORT, () => {
    console.log(`SERVER IS RUNNING AT PORT : ${PORT}`.bgBlue.black);
   
})
const http = require("http")
const app = require("./app")
const mongoose = require("mongoose")

const dbUrl = "mongodb+srv://larvish:larvish007@products.wl1bjug.mongodb.net/E-commerce?retryWrites=true&w=majority"

mongoose.connect(dbUrl)
.then(() => {
    console.log("Connected")
    server.listen(3000)
})
.catch((err) => console.log(err))

const server = http.createServer(app)
const express = require("express")
const productsRoutes = require("./api/routes/products")
const app = express()
const morgan = require("morgan")

app.use(express.json())
app.use(morgan("dev"))
app.use(express.urlencoded({extended : false}))

app.use("/products",productsRoutes)

app.use((req, res) => {
    res.status(404).json({
        message : "not found"
    })
})

module.exports = app
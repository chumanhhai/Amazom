const express = require("express")
const cors = require("cors")
require("./database/startDb")
const productRouter = require("./router/product")
const customerRouter = require("./router/customer")
const cartRouter = require("./router/cart")

const app = express()
const PORT = process.env.PORT || 3000

app.use(cors())
app.use(express.json())
app.use(productRouter)
app.use(customerRouter)
app.use(cartRouter)

app.listen(PORT, () => console.log("Server is up on port ", PORT))
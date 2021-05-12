const express = require("express")
const productTable = require("../database/product")

const router = express.Router()

router.get("/product/allProducts", async (req, res) => {
    try {
        const { offset, limit } = req.query
        const result = await productTable.getAllProducts(offset, limit)
        res.status(200).send({ success: { data: result }, error: null })
    } catch(e) {
        res.status(200).send({ success: null, error: e })
    }
})

module.exports = router
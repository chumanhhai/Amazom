const express = require("express")
const productTable = require("../database/product")

const router = express.Router()

router.get("/product/allProducts", async (req, res) => {
    try {
        const { offset, limit, select, orderBy } = req.query
        const data = { offset: parseInt(offset), limit: parseInt(limit), select, orderBy }
        const result = await productTable.getAllProducts(data)
        res.status(200).send({ success: { data: result }, error: null })
    } catch(e) {
        res.status(200).send({ success: null, error: e })
    }
})

router.get("/product/search", async (req, res) => {
    try {
        const { title } = req.query
        const result = await productTable.search(title)
        res.status(200).send({ success: { data: result }, error: null })
    } catch(e) {
        res.status(200).send({ success: null, error: e })
    }
})

module.exports = router
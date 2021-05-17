const express = require("express")
const supplierTable = require("../database/supplier")
const cartTable = require("../database/cart")
const auth = require("../middleware/auth")
const jwt = require("jsonwebtoken")

const router = express.Router()

router.post("/supplier/signUp", async (req, res) => {
    try {
        await supplierTable.signUp(req.body)
        res.status(200).send({ success: true, error: null })
    } catch(e) {
        res.status(200).send({ success: null, error: e })
    } 
})

router.post("/supplier/signIn", async (req, res) => {
    try {
        const [supplier] = await supplierTable.signIn(req.body)
        if(supplier) {
            const cart = await cartTable.getCart(supplier.supplier_id)
            const token = jwt.sign({ userId: supplier.supplier_id }, process.env.SECRET_JWT_CODE)
            return res.status(200).send({ success: { supplier, cart, token }, error: null })
        }
        res.status(200).send({ success: { data: null, token: "" }, error: null })

    } catch(e) {
        res.status(200).send({ success: null, error: e })
    }
})

router.get("/supplier/me/profile", auth, async (req, res) => {
    try {
        const [supplier] = await supplierTable.getMyProfile(req.params.userId)
        const cart = await cartTable.getCart(supplier.supplier_id)
        res.status(200).send({ success: { supplier, cart }, error: null })
    } catch(e) {
        res.status(200).send({ success: null, error: e })
    }
})

router.post("/supplier/updateProfile", auth, async (req, res) => {
    try {
        const update = {
            supplier_id: req.params.userId,
            ...req.body
        }
        await supplierTable.updateProfile(update)
        res.status(200).send({ success: true, error: null })
    } catch(e) {
        res.status(200).send({ success: null, error: e })
    }
})

module.exports = router
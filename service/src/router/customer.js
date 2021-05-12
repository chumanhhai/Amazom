const express = require("express")
const customerTable = require("../database/customer")
const cartTable = require("../database/cart")
const auth = require("../middleware/auth")
const jwt = require("jsonwebtoken")

const router = express.Router()

router.post("/customer/signUp", async (req, res) => {
    try {
        await customerTable.signUp(req.body)
        res.status(200).send({ success: true, error: null })
    } catch(e) {
        res.status(200).send({ success: null, error: e })
    } 
})

router.post("/customer/signIn", async (req, res) => {
    try {
        const [customer] = await customerTable.signIn(req.body)
        if(customer) {
            const cart = await cartTable.getCart(customer.customer_id)
            const token = jwt.sign({ userId: customer.customer_id }, process.env.SECRET_JWT_CODE)
            return res.status(200).send({ success: { customer, cart, token }, error: null })
        }
        res.status(200).send({ success: { data: null, token: "" }, error: null })

    } catch(e) {
        res.status(200).send({ success: null, error: e })
    }
})

router.get("/customer/me/profile", auth, async (req, res) => {
    try {
        const [customer] = await customerTable.getMyProfile(req.params.userId)
        const cart = await cartTable.getCart(customer.customer_id)
        res.status(200).send({ success: { customer, cart }, error: null })
    } catch(e) {
        res.status(200).send({ success: null, error: e })
    }
})

module.exports = router
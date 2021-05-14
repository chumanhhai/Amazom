const axios = require("axios")

const orderAPI = {
    baseUrl: "http://localhost:3000/order",
    token: "Bearer " + localStorage.getItem("token"),

    createOrder: async function(order) {
        const { data: result } = await axios.post(this.baseUrl + "/createOrder", order, { headers: { Authorization: this.token } })
        return result
    },

    getAllOrders: async function(data) {
        const { data: result } = await axios.post(this.baseUrl + "/getAllOrders", data, { headers: { Authorization: this.token } })
        return result
    },

    getAllItems: async function(data) {
        const { data: result } = await axios.post(this.baseUrl + "/getAllItems", data, { headers: { Authorization: this.token } })
        return result
    }
}

export default orderAPI
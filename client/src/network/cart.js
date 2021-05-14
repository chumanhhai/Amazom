const axios = require("axios")

const cartAPI = {
    baseUrl: "http://localhost:3000/cart",
    token: "Bearer " + localStorage.getItem("token"),

    getCart: async function() {
        const { data: result } = await axios.get(this.baseUrl + "/getCart", { headers: { Authorization: this.token } })
        return result
    },

    deleteCart: async function() {
        const { data: result } = await axios.get(this.baseUrl + "/deleteCart", { headers: { Authorization: this.token } })
        return result
    },

    addItem: async function(item) {
        const { data: result } = await axios.post(this.baseUrl + "/addItem", item, { headers: { Authorization: this.token } })
        return result
    },

    updateItem: async function(item) {
        const { data: result } = await axios.post(this.baseUrl + "/updateItem", item, { headers: { Authorization: this.token } })
        return result
    },

    deleteItem: async function(item) {
        const { data: result } = await axios.post(this.baseUrl + "/removeItem", item, { headers: { Authorization: this.token } })
        return result
    },
}

export default cartAPI
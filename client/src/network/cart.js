const axios = require("axios")

const cartAPI = {
    baseUrl: "http://localhost:3000/cart",

    getCart: async function() {
        const { data: result } = await axios.get(this.baseUrl + "/getCart", {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token")
            }
        })
        return result
    }
}

export default cartAPI
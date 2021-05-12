const axios = require("axios")

const productAPI = {
    baseUrl: "http://localhost:3000/product",

    getAllProducts: async function(offset, limit) {
        const { data: result } = await axios.get(this.baseUrl + `/allProducts?offset=${offset}&limit=${limit}`)
        return result
    }
}

export default productAPI
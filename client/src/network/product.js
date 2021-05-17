const axios = require("axios")

const productAPI = {
    baseUrl: "http://localhost:3000/product",

    getAllProducts: async function(data) {
        const { offset, limit, select, orderBy } = data
        const { data: result } = await axios.get(this.baseUrl + `/allProducts?offset=${offset}\
            &limit=${limit}&select=${select}&orderBy=${orderBy}`)
        return result
    },

    search: async function(title) {
        const { data: result } = await axios.get(this.baseUrl + `/search?title=${title}`)
        return result
    }
}

export default productAPI
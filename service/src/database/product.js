const connection = require("../database/startDb")

const productTable = {
    getAllProducts: async function(offset, limit) {
        const query = `SELECT p.*, s.name supplier_name FROM product p, supplier s WHERE p.supplier_id=s.supplier_id LIMIT ${offset}, ${limit}`
        const [result] = await connection.query(query)
        
        return result
    }

}

module.exports = productTable
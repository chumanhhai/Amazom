const connection = require("./startDb")

const imageTable = {
    upload: async function(image) {
        const { cps_id, data } = image
        const deleteQuery = "DELETE FROM image WHERE cps_id=?"
        const insertQuery = "INSERT INTO image values (?, ?)"

        const q1 = new Promise(async (resolve) => {
            await connection.query(deleteQuery, cps_id) // delete first
            resolve()
        })
        const q2 = new Promise(async (resolve) => {
            await connection.query(insertQuery, [cps_id, data]) // then insert
            resolve()
        })
        await Promise.all([q1, q2])

    },

    getImage: async function(cps_id) {
        const query = "SELECT data FROM image WHERE cps_id=?"
        
        const [result] = await connection.query(query, cps_id)
        return result
    },
}

module.exports = imageTable
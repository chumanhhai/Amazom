const mysql = require("mysql2/promise")

class Connection {
    static connection = null

    getInstance() {
        if(!this.connection) {
            this.connection = mysql.createPool({
                host: process.env.HOST,
                database: process.env.DB_NAME,
                user: process.env.USER,
                password: process.env.PASSWORD
            })
            console.log("DB is connected");
        }
        return this.connection
    }
}

module.exports = new Connection().getInstance()
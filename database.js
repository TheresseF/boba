const {
    createPool
} = require('mysql');

const poo = createPool({
    host:"localhost",
    user:"root",
    password: "",
    database: "boba_db",
    connectionLimit: 10
})

pool.query()
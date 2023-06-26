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

pool.query(`select * from registration`, (err, result, fields) => {
    if(err){
        return 
    }
})

module.exports = pool;
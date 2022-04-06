const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    password: "",
    host: "localhost",
    port: process.env.PORT || 5432,
    database: "dealership",
});

module.exports = pool;
/*引入mysql模块*/

const mysql = require('mysql');
const sd = require('silly-datetime');



/*创建连接*/



const pool = mysql.createPool({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root1234",
    database: "dkpool"
})
exports.connectionPool = pool;

const { connectionPool } = require("../db/mysql");

class UserLoginInfo {

    //user register.
    async addLoginRecord(userLoginInfo, callback) {
        let sql = `INSERT INTO user_login_info
     (address, last_login_time) VALUES(?,?)`;
        let todo = [
            userLoginInfo.wallet_address == null ? "" : userLoginInfo.wallet_address,
            Math.floor(Date.now() / 1000),

        ];

        connectionPool.getConnection(function (err, connection) {
            if (err) throw err;
            connection
                .query(sql, todo, (error, results, fields) => {
                    if (error) throw error;
                    callback(results);
                    console.log('=========================================================================================================================')
                    console.log(`Insert user_login_info Table succeed`);
                    console.log('=========================================================================================================================')
                    console.log('\n')
                    connection.release();
                });
            return;
        });
    }
    async getUserLoginInfoByAddress(address, callback) {
        connectionPool.getConnection(function (err, connection) {
            if (err) throw err;
            connection
                .query(`SELECT * FROM user_login_info WHERE address = ?`, [address], (error, results, fields) => {
                    if (error) throw error;
                    // console.log(fields);
                    callback(results);
                    connection.release();
                })
        })
    }
}
module.exports = UserLoginInfo;
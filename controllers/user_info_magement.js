const { connectionPool } = require("../db/mysql");

class UserInfo {
    //user register.
    async register(userInfo, callback) {
        let sql = `INSERT INTO address_role
     (address, role) VALUES(?,?)`;
        let todo = [
            userInfo.wallet_address == null ? "" : userInfo.wallet_address,
            userInfo.role == null ? 1 : userInfo.role,

        ];

        connectionPool.getConnection(function (err, connection) {
            if (err) throw err;
            connection
                .query(sql, todo, (error, results, fields) => {
                    if (error) throw error;
                    callback(results);
                    console.log('=========================================================================================================================')
                    console.log(`Insert address_role Table succeed`);
                    console.log('=========================================================================================================================')
                    console.log('\n')
                    connection.release();
                });
            return;
        });
    }
    //update a userInfo.
    async updateUserInfo(id, userInfo, callback) {
        //get the previous DKPool.
        connectionPool.getConnection(function (err, connection) {
            if (err) throw err;
            connection
                .query(`SELECT * FROM address_role WHERE id = ?`, [parseInt(id)], (error, results, fields) => {
                    if (error) throw error;
                    // console.log(fields);
                    if (results.length > 0) {
                        // update statment
                        let sql = `UPDATE address_role
                                    SET
                                    role = ?
                                    WHERE id = ?`;

                        let data = [
                            userInfo.role == null ? results[0].role : userInfo.role,
                            parseInt(id)
                        ];
                        console.log(data);
                        connection
                            .query(sql, data, (error, results, fields) => {
                                if (error) throw error;
                                console.log(results);
                                callback(results);
                                console.log('=========================================================================================================================')
                                console.log(`Update dkpool address_role succeed`);
                                console.log('=========================================================================================================================')
                                console.log('\n')
                            });
                    } else {
                        callback();
                    }
                    connection.release();
                    return;
                });
            return;
        });



        //update the checked todo
        return;
    }

    async getUserInfoByAddress(address, callback) {
        connectionPool.getConnection(function (err, connection) {
            if (err) throw err;
            connection
                .query(`SELECT * FROM address_role WHERE address = ?`, [address], (error, results, fields) => {
                    if (error) throw error;
                    // console.log(fields);
                    callback(results);
                    connection.release();
                })
        })
    }


    //delete .
    async delete(id, callback) {
        // DELETE statment
        let sql = `DELETE FROM address_role WHERE id = ?`;

        connectionPool.getConnection(function (err, connection) {
            if (err) throw err;
            // delete a row with id 1
            connection.query(sql, [parseInt(id)], (error, results, fields) => {
                if (error)
                    return console.error(error.message);
                callback(results);
                console.log('Deleted Row(s):', results.affectedRows);
            });
            connection.release();

            return;
        });
    }
}

module.exports = UserInfo;
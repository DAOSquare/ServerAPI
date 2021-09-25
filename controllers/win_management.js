const { connectionPool } = require("../db/mysql");

class Win {
    //get all Wins.
    async getWins(signAddr, callback) {
        // return results.rows;
        connectionPool.getConnection(function (err, connection) {
            if (err) throw err;
            const querySQL = `SELECT * FROM win_Info where applicant_address = ?`;
            let data = [signAddr];

            connection
                .query(querySQL, data, (error, results, fields) => {
                    if (error) throw error;
                    // console.log(results)
                    callback(results);
                    connection.release();
                });
        });
    }

    async getwinnfoByWinID(winId, callback) {
        // return results.rows;
        connectionPool.getConnection(function (err, connection) {
            if (err) throw err;
            const querySQL = `SELECT * FROM win_Info where id = ?`;
            let data = [parseInt(winId)];

            connection
                .query(querySQL, data, (error, results, fields) => {
                    if (error) throw error;
                    // console.log(results)
                    callback(results);
                    connection.release();
                });
        });
    }

    //create a win.
    async createWin(winInfo, callback) {
        console.log('winInfo: ', winInfo);
        console.log(winInfo.nft_name, winInfo.nft_description, winInfo.pool_name, winInfo.nft_icon, winInfo.total_num_of_mint, winInfo.timeStart, winInfo.timeEnd);
        let stmt = `INSERT INTO win_Info (
            nft_name, nft_description, pool_name, 
            nft_icon, total_num_of_mint, time_start, 
            time_end, cost_per_nft,status, 
            applicant_address) VALUES(?,?,?,?,?,?,?,?,?,?)`;
        let todo = [
            winInfo.nft_name == null ? "" : winInfo.nft_name,
            winInfo.nft_description == null ? "" : winInfo.nft_description,
            winInfo.pool_name == null ? "" : winInfo.pool_name,
            winInfo.nft_icon == null ? "" : winInfo.nft_icon,
            winInfo.total_num_of_mint == null ? 0 : winInfo.total_num_of_mint,
            winInfo.time_start == null ? 0 : winInfo.time_start,
            winInfo.time_end == null ? 0 : winInfo.time_end,
            winInfo.cost_per_nft == null ? 0 : winInfo.cost_per_nft,
            1,
            winInfo.walletAddress == null ? "" : winInfo.walletAddress,

        ];

        connectionPool.getConnection(function (err, connection) {
            if (err) throw err;
            connection
                .query(stmt, todo, (error, results, fields) => {
                    if (error) throw error;
                    callback(results);
                    console.log('=========================================================================================================================')
                    console.log(`Insert win_Info Table succeed`);
                    console.log('=========================================================================================================================')
                    console.log('\n')
                    connection.release();
                });
            return;
        });
    }
    //update a win.
    async updateWin(winId, winInfo, callback) {
        console.log(winInfo);
        //get the previous Win.
        connectionPool.getConnection(function (err, connection) {
            if (err) throw err;
            connection
                .query(`SELECT * FROM win_Info WHERE id = ?`, [parseInt(winId)], (error, results, fields) => {
                    if (error) throw error;
                    // console.log(fields);
                    if (results.length > 0) {
                        // update statment
                        let sql = `UPDATE win_Info
                            SET 
                            nft_icon = ?
                            WHERE id = ?`;

                        let data = [
                            winInfo.nft_icon == null ? results[0].nft_icon : winInfo.nft_icon,
                            parseInt(winId)
                        ];
                        console.log(data);
                        connection
                            .query(sql, data, (error, results, fields) => {
                                if (error) throw error;
                                callback(results);
                                console.log('=========================================================================================================================')
                                console.log(`Update win_Info Table succeed`);
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


    //audit a win.
    async auditWin(winId, winInfo, callback) {
        console.log(winInfo);
        //get the previous Win.
        connectionPool.getConnection(function (err, connection) {
            if (err) throw err;
            connection
                .query(`SELECT * FROM win_Info WHERE id = ?`, [parseInt(winId)], (error, results, fields) => {
                    if (error) throw error;
                    // console.log(fields);
                    if (results.length > 0) {
                        // update statment
                        let sql = `UPDATE win_Info
                            SET 
                            status = ?
                            WHERE id = ?`;

                        let data = [
                            winInfo.audit_result,
                            parseInt(winId)
                        ];
                        console.log(data);
                        connection
                            .query(sql, data, (error, results, fields) => {
                                if (error) throw error;
                                callback(results);
                                console.log('=========================================================================================================================')
                                console.log(`Update win_Info Table succeed`);
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

    //delete a dkpool.
    async deletewin(winId, callback) {
        // DELETE statment
        let sql = `DELETE FROM win_Info WHERE id = ?`;

        connectionPool.getConnection(function (err, connection) {
            if (err) throw err;
            // delete a row with id 1
            connection.query(sql, [parseInt(winId)], (error, results, fields) => {
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

module.exports = Win;
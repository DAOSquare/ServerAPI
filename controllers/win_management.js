const { connectionPool } = require("../db/mysql");

class Win {
    //get all Wins.
    async getWins(signAddr, callback) {
        // return results.rows;
        connectionPool.getConnection(function (err, connection) {
            if (err) throw err;
            const querySQL = `SELECT win_Info.*, nft_cost_dkps.cost_per_nft as win_cost_per_nft, nft_cost_dkps.pool_name as win_pool_name,
                            nft_cost_dkps.win_nft_id FROM win_Info LEFT JOIN nft_cost_dkps on nft_cost_dkps.win_nft_id=win_Info.id WHERE win_Info.applicant_address = ?`;
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
            const querySQL = `SELECT win_Info.*, nft_cost_dkps.cost_per_nft as win_cost_per_nft,
                                nft_cost_dkps.pool_name as win_pool_name, nft_cost_dkps.win_nft_id FROM win_Info 
                                LEFT JOIN nft_cost_dkps on nft_cost_dkps.win_nft_id=win_Info.id WHERE win_Info.id = ?`;
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
    async createWin(winInfo, costNFTList, callback) {
        // console.log(winInfo.nft_name, winInfo.nft_description, winInfo.pool_name, winInfo.nft_icon, winInfo.total_num_of_mint, winInfo.timeStart, winInfo.timeEnd);
        let insertSQL = `INSERT INTO win_Info (
            nft_name, nft_description, pool_name, 
            nft_icon, total_num_of_mint, time_start, 
            time_end,status, 
            applicant_address) VALUES(?,?,?,?,?,?,?,?,?)`;
        let insertParams = [
            winInfo.nft_name == null ? "" : winInfo.nft_name,
            winInfo.nft_description == null ? "" : winInfo.nft_description,
            winInfo.pool_name == null ? "" : winInfo.pool_name,
            winInfo.nft_icon == null ? "" : winInfo.nft_icon,
            winInfo.total_num_of_mint == null ? 0 : winInfo.total_num_of_mint,
            winInfo.time_start == null ? 0 : winInfo.time_start,
            winInfo.time_end == null ? 0 : winInfo.time_end,
            1,
            winInfo.walletAddress == null ? "" : winInfo.walletAddress,

        ];
        connectionPool.getConnection(function (err, connection) {
            if (err) throw err;
            connection
                .query(insertSQL, insertParams, (error, results, fields) => {
                    if (error) throw error;
                    const win_nft_id = results.insertId;
                    console.log('=========================================================================================================================')
                    console.log(`Insert win_Info Table succeed`);
                    console.log('=========================================================================================================================')
                    console.log('\n')
                    insertSQL = `INSERT INTO nft_cost_dkps (win_nft_id, cost_per_nft, pool_name) VALUES ?`;
                    insertParams = [];
                    for (var i = 0; i < costNFTList.length; i++) {
                        const amount = costNFTList[i][0];
                        const name = costNFTList[i][1]
                        let tem = [];
                        tem.push(win_nft_id);
                        tem.push(amount);
                        tem.push(name);
                        console.log(tem);
                        insertParams[i] = tem;
                    };
                    console.log(insertParams);

                    connection
                        .query(insertSQL, [insertParams], (error, results1, fields) => {
                            if (error != null) {
                                console.error(error.message);
                                console.log(insertSQL);
                                throw error;
                            }
                            if (results1.affectedRows >= 1) {
                                console.log('=========================================================================================================================')
                                console.log(`Insert nft_cost_dkps Table succeed`);
                                console.log('=========================================================================================================================')
                                console.log('\n')
                                callback(results1);

                            } else {
                                console.log('=========================================================================================================================')
                                console.log(`Insert nft_cost_dkps Table failed`);
                                console.log('=========================================================================================================================')
                                console.log('\n')
                                console.log(insertSQL);
                            }
                        })
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
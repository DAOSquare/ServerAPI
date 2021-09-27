const { connectionPool } = require("../db/mysql");

class NFTCost {
    //get list by nft_id.
    async getListByNFTID(nft_id, callback) {
        // return results.rows;
        connectionPool.getConnection(function (err, connection) {
            if (err) throw err;
            const querySQL = `SELECT * FROM nft_cost_dkps where win_nft_id = ?`;
            let data = [nft_id];
            connection
                .query(querySQL, data, (error, results, fields) => {
                    if (error) throw error;
                    console.log(results)
                    callback(results);
                    connection.release();
                });
        });
    }

    //create a dkpool.
    async create(costNFTInfo, callback) {
        let sql = `INSERT INTO nft_cost_dkps
     (win_nft_id, cost_per_nft, pool_name) VALUES(?,?,?)`;
        let todo = [
            costNFTInfo.win_nft_id == null ? "" : costNFTInfo.win_nft_id,
            costNFTInfo.cost_per_nft == null ? "" : costNFTInfo.cost_per_nft,
            costNFTInfo.pool_name == null ? "" : costNFTInfo.pool_name,

        ];

        connectionPool.getConnection(function (err, connection) {
            if (err) throw err;
            connection
                .query(sql, todo, (error, results, fields) => {
                    if (error) throw error;
                    callback(results);
                    console.log('=========================================================================================================================')
                    console.log(`Insert nft_cost_dkps Table succeed`);
                    console.log('=========================================================================================================================')
                    console.log('\n')
                    connection.release();
                });
            return;
        });
    }
    //update a DKPool.
    async updateDKPool(id, costNFTInfo, callback) {
        console.log(costNFTInfo);
        //get the previous DKPool.
        connectionPool.getConnection(function (err, connection) {
            if (err) throw err;
            connection
                .query(`SELECT * FROM nft_cost_dkps WHERE id = ?`, [parseInt(id)], (error, results, fields) => {
                    if (error) throw error;
                    // console.log(fields);
                    if (results.length > 0) {
                        // update statment
                        let sql = `UPDATE nft_cost_dkps
                                    SET
                                    cost_per_nft = ?
                                    WHERE id = ?`;

                        let data = [
                            costNFTInfo.cost_per_nft == null ? results[0].cost_per_nft : costNFTInfo.cost_per_nft,
                            parseInt(id)
                        ];
                        console.log(data);
                        connection
                            .query(sql, data, (error, results, fields) => {
                                if (error) throw error;
                                console.log(results);
                                callback(results);
                                console.log('=========================================================================================================================')
                                console.log(`Update dkpool nft_cost_dkps succeed`);
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

    async getNFTCostDKPInfoByNFTID(win_nft_id, callback) {
        connectionPool.getConnection(function (err, connection) {
            if (err) throw err;
            connection
                .query(`SELECT * FROM nft_cost_dkps WHERE id = ?`, [parseInt(nftwin_nft_idId)], (error, results, fields) => {
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
        let sql = `DELETE FROM nft_cost_dkps WHERE id = ?`;

        connectionPool.getConnection(function (err, connection) {
            if (err) throw err;
            // delete a row with id 1
            connection.query(sql, [parseInt(poolId)], (error, results, fields) => {
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

module.exports = NFTCost;
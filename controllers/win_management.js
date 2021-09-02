const { connectionPool } = require("../db/mysql");

class Win {
    //get all Wins.
    async getWins(callback) {
        // return results.rows;
        connectionPool.getConnection(function (err, connection) {
            if (err) throw err;
            connection
                .query(`SELECT * FROM win_Info`, (error, results, fields) => {
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
        console.log(winInfo.win_name, winInfo.win_description, winInfo.external_url, winInfo.image_url, winInfo.supply, winInfo.timeStart, winInfo.timeEnd);
        let stmt = `INSERT INTO win_Info (win_name, win_description, external_url, image_url, supply, timeStart, timeEnd) VALUES(?,?,?,?,?,?,?)`;
        let todo = [
            winInfo.win_name == null ? "" : winInfo.win_name,
            winInfo.win_description == null ? "" : winInfo.win_description,
            winInfo.external_url == null ? "" : winInfo.external_url,
            winInfo.image_url == null ? "" : winInfo.image_url,
            winInfo.supply == null ? 0 : winInfo.supply,
            winInfo.timeStart == null ? 0 : winInfo.timeStart,
            winInfo.timeEnd == null ? 0 : winInfo.timeEnd
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
    //update a DKPool.
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
                            SET win_name = ?,
                            win_description = ?, 
                            external_url = ?,
                            image_url = ?, 
                            supply = ?, 
                            timeStart = ?, 
                            timeEnd = ?
                            WHERE id = ?`;

                        let data = [
                            winInfo.win_name == null ? results[0].win_name : winInfo.win_name,
                            winInfo.win_description == null ? results[0].win_description : winInfo.win_description,
                            winInfo.external_url == null ? results[0].external_url : winInfo.external_url,
                            winInfo.image_url == null ? results[0].image_url : winInfo.image_url,
                            winInfo.supply == null ? results[0].supply : winInfo.supply,
                            winInfo.timeStart == null ? results[0].timeStart : winInfo.timeStart,
                            winInfo.timeEnd == null ? results[0].timeEnd : winInfo.timeEnd,
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
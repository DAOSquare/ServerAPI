const { connectionPool } = require("../db/mysql");

class DKPool {
  //get all DKPools.
  async getDKPools(signAddr, callback) {
    // return results.rows;
    connectionPool.getConnection(function (err, connection) {
      if (err) throw err;
      const querySQL = `SELECT * FROM pool_Info where applicant_address = ?`;
      let data = [signAddr];
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
  async createDKPool(dkpInfo, callback) {
    // console.log('dkpInfo: ', dkpInfo);
    console.log(dkpInfo.poolname, dkpInfo.pooldesc, dkpInfo.poolIcon, dkpInfo.type, dkpInfo.tokenName, dkpInfo.tokenIcon, dkpInfo.tokenAddress);
    let stmt = `INSERT INTO pool_Info
     (pool_name, pool_desc, poolIcon, 
      type, token_name, tokenIcon, 
      token_address, status, email, 
      applicant_address, admin_address, note, 
      cost_per_token, time_start, time_end) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`;
    let todo = [
      dkpInfo.pool_name == null ? "" : dkpInfo.pool_name,
      dkpInfo.pool_desc == null ? "" : dkpInfo.pool_desc,
      dkpInfo.poolIcon == null ? "" : dkpInfo.poolIcon,
      dkpInfo.type == null ? 1 : parseInt(dkpInfo.type),
      dkpInfo.token_name == null ? "" : dkpInfo.token_name,
      dkpInfo.tokenIcon == null ? "" : dkpInfo.tokenIcon,
      dkpInfo.token_address == null ? "" : dkpInfo.token_address,
      1,
      dkpInfo.email == null ? "" : dkpInfo.email,
      dkpInfo.walletAddress == null ? "" : dkpInfo.walletAddress,
      dkpInfo.admin_address == null ? "" : dkpInfo.admin_address,
      dkpInfo.note == null ? "" : dkpInfo.note,
      dkpInfo.cost_per_token == null ? 0 : parseInt(dkpInfo.cost_per_token),
      dkpInfo.time_start == null ? 0 : parseInt(dkpInfo.time_start),
      dkpInfo.time_end == null ? 0 : parseInt(dkpInfo.time_end),
    ];

    connectionPool.getConnection(function (err, connection) {
      if (err) throw err;
      connection
        .query(stmt, todo, (error, results, fields) => {
          if (error) throw error;
          callback(results);
          console.log('=========================================================================================================================')
          console.log(`Insert dkpool Table succeed`);
          console.log('=========================================================================================================================')
          console.log('\n')
          connection.release();
        });
      return;
    });
  }
  //update a DKPool.
  async updateDKPool(poolId, dkpInfo, callback) {
    console.log(dkpInfo);
    //get the previous DKPool.
    connectionPool.getConnection(function (err, connection) {
      if (err) throw err;
      connection
        .query(`SELECT * FROM pool_Info WHERE id = ?`, [parseInt(poolId)], (error, results, fields) => {
          if (error) throw error;
          // console.log(fields);
          if (results.length > 0) {
            // update statment
            let sql = `UPDATE pool_Info
            SET
            pool_desc = ?, 
            poolIcon = ?,
            token_name = ?, 
            tokenIcon = ?, 
            email = ?,
            admin_address = ?
            WHERE id = ?`;

            let data = [
              dkpInfo.pool_desc == null ? results[0].poolname : dkpInfo.pool_desc,
              dkpInfo.poolIcon == null ? results[0].poolIcon : dkpInfo.poolIcon,
              dkpInfo.token_name == null ? results[0].token_name : dkpInfo.token_name,
              dkpInfo.tokenIcon == null ? results[0].tokenIcon : dkpInfo.tokenIcon,
              dkpInfo.email == null ? results[0].email : dkpInfo.email,
              dkpInfo.admin_address == null ? results[0].admin_address : dkpInfo.admin_address,
              parseInt(poolId)
            ];
            console.log(data);
            connection
              .query(sql, data, (error, results, fields) => {
                if (error) throw error;
                console.log(results);
                callback(results);
                console.log('=========================================================================================================================')
                console.log(`Update dkpool Table succeed`);
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
  async deletedkpool(poolId, callback) {
    // DELETE statment
    let sql = `DELETE FROM pool_Info WHERE id = ?`;

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

module.exports = DKPool;
const { connectionPool } = require("../db/mysql");

class DKPool {
  //get all DKPools.
  async getDKPools(callback) {
    // return results.rows;
    connectionPool.getConnection(function (err, connection) {
      if (err) throw err;
      connection
        .query(`SELECT * FROM pool_Info`, (error, results, fields) => {
          if (error) throw error;
          // console.log(results)
          callback(results);
          connection.release();
        });
    });
  }

  //create a dkpool.
  async createDKPool(dkpInfo, callback) {
    console.log('dkpInfo: ', dkpInfo);
    console.log(dkpInfo.poolname, dkpInfo.pooldesc, dkpInfo.poolIcon, dkpInfo.type, dkpInfo.tokenName, dkpInfo.tokenIcon, dkpInfo.tokenAddress);
    let stmt = `INSERT INTO pool_Info (poolname, pooldesc, poolIcon, type, tokenName, tokenIcon, tokenAddress) VALUES(?,?,?,?,?,?,?)`;
    let todo = [
      dkpInfo.poolname == null ? "" : dkpInfo.poolname,
      dkpInfo.pooldesc == null ? "" : dkpInfo.pooldesc,
      dkpInfo.poolIcon == null ? "" : dkpInfo.poolIcon,
      dkpInfo.type == null ? 1 : dkpInfo.type,
      dkpInfo.tokenName == null ? "" : dkpInfo.tokenName,
      dkpInfo.tokenIcon == null ? "" : dkpInfo.tokenIcon,
      dkpInfo.tokenAddress == null ? "" : dkpInfo.tokenAddress
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
            SET poolname = ?,
            pooldesc = ?, 
            poolIcon = ?,
            type = ?, 
            tokenName = ?, 
            tokenIcon = ?, 
            tokenAddress = ?
            WHERE id = ?`;

            let data = [
              dkpInfo.poolname == null ? results[0].poolname : dkpInfo.poolname,
              dkpInfo.pooldesc == null ? results[0].pooldesc : dkpInfo.pooldesc,
              dkpInfo.poolIcon == null ? results[0].poolIcon : dkpInfo.poolIcon,
              dkpInfo.type == null ? results[0].type : dkpInfo.type,
              dkpInfo.tokenName == null ? results[0].tokenName : dkpInfo.tokenName,
              dkpInfo.tokenIcon == null ? results[0].tokenIcon : dkpInfo.tokenIcon,
              dkpInfo.tokenAddress == null ? results[0].tokenAddress : dkpInfo.tokenAddress,
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
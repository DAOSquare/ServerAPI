const express = require("express");
const DKPool = require('../controllers/dkp_management');
const sd = require('silly-datetime');

const router = express.Router();

//Get all todos.
router.get('/', async (req, res) => {
    let rel = await new DKPool().getDKPools((queryResult) => {
        res.json({
            "response": {
                "status": 200, //或其他状态码
                "charset": "UTF-8", //定义返回内容的编码
                "respond_time": sd.format(new Date(), 'YYYY-MM-DD HH:mm:ss'), //接口响应时间戳
                "result": queryResult
            }
        });
    });

});

//Create a todo.
router.post('/new_dkpool', async (req, res) => {
    let dkpInfo = req.query;
    console.log(dkpInfo);
    await new DKPool().createDKPool(dkpInfo, (queryResult) => {
        console.log(queryResult.affectedRows > 0)
        if (queryResult && queryResult.affectedRows > 0) {
            res.json({
                "response": {
                    "status": 200, //或其他状态码
                    "charset": "UTF-8", //定义返回内容的编码
                    "respond_time": sd.format(new Date(), 'YYYY-MM-DD HH:mm:ss'), //接口响应时间戳
                    "result": { //返回的结果
                        "affectedRows": queryResult.affectedRows,
                    }
                }
            });
        } else {
            res.json({
                "response": {
                    "status": 100, //或其他状态码
                    "charset": "UTF-8", //定义返回内容的编码
                    "respond_time": sd.format(new Date(), 'YYYY-MM-DD HH:mm:ss'), //接口响应时间戳
                    "result": { //返回的结果
                        "affectedRows": 0,

                    }
                }
            });
        }
    });

});

//Update a todo.
router.put('/:poolId', async (req, res) => {
    if (req.params.poolId) {
        let poolId = parseInt(req.params.poolId);
        console.log(poolId);
        let dkpInfo = req.query;
        if ((poolId | 0) === poolId) {
            await new DKPool().updateDKPool(poolId, dkpInfo, (queryResult) => {
                if (queryResult && queryResult.changedRows > 0) {
                    res.json({
                        "response": {
                            "status": 200, //或其他状态码
                            "charset": "UTF-8", //定义返回内容的编码
                            "respond_time": sd.format(new Date(), 'YYYY-MM-DD HH:mm:ss'), //接口响应时间戳
                            "result": {
                                "changedRows": queryResult.changedRows//返回的结果
                            }
                        }
                    });
                } else {
                    res.json({
                        "response": {
                            "status": 100, //或其他状态码
                            "charset": "UTF-8", //定义返回内容的编码
                            "respond_time": sd.format(new Date(), 'YYYY-MM-DD HH:mm:ss'), //接口响应时间戳
                            "result": {
                                "changedRows": 0//返回的结果
                            }
                        }
                    });
                }
            });

        } else {
            res.send("param poolId must be integer")
        }
    } else {
        res.send("no poolId provided")
    }
});

//Delete a todo.
router.delete('/:poolId', async (req, res) => {
    if (req.params.poolId) {
        let poolId = parseInt(req.params.poolId);
        if ((poolId | 0) === poolId) {
            await new DKPool().deletedkpool(poolId, (queryResult) => {
                console.log(queryResult);
                if (queryResult.affectedRows > 0) {
                    res.json({
                        "response": {
                            "status": 200, //或其他状态码
                            "charset": "UTF-8", //定义返回内容的编码
                            "respond_time": sd.format(new Date(), 'YYYY-MM-DD HH:mm:ss'), //接口响应时间戳
                            "result": {
                                "affectedRows": queryResult.affectedRows//返回的结果
                            }
                        }
                    });
                } else {
                    res.json({
                        "response": {
                            "status": 200, //或其他状态码
                            "charset": "UTF-8", //定义返回内容的编码
                            "respond_time": sd.format(new Date(), 'YYYY-MM-DD HH:mm:ss'), //接口响应时间戳
                            "result": {
                                "affectedRows": queryResult.affectedRows//返回的结果
                            }
                        }
                    });
                }

            });
        } else {
            res.send("param poolId must be integer")
        }
    } else {
        res.send("no poolId provided")
    }
});

module.exports = router;
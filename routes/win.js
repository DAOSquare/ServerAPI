const express = require("express");
const Win = require('../controllers/win_management');
const sd = require('silly-datetime');

const router = express.Router();

//Get all wins.
router.get('/', async (req, res) => {
    let rel = await new Win().getWins((queryResult) => {
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

//Create a win.
router.post('/new_win', async (req, res) => {
    let winInfo = req.query;
    console.log(winInfo);
    await new Win().createWin(winInfo, (queryResult) => {
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

//Update a win.
router.put('/:winId', async (req, res) => {
    let winId = req.params.winId;
    console.log(winId);
    let winInfo = req.query;
    await new Win().updateWin(winId, winInfo, (queryResult) => {
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
});

//Delete a win.
router.delete('/:winId', async (req, res) => {
    if (req.params.winId) {
        let winId = parseInt(req.params.winId);
        if ((winId | 0) === winId) {
            await new Win().deletewin(winId, (queryResult) => {
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
            res.send("param winId must be integer")
        }
    } else {
        res.send("no winId provided")
    }
});

module.exports = router;
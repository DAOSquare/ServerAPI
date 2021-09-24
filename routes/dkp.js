const express = require("express");
const DKPool = require('../controllers/dkp_management');
const sd = require('silly-datetime');
const { veirySignature } = require('../utils/recoverTx');
const { checkName } = require('../utils/utils');
const router = express.Router();

//Get all todos.
router.get('/', async (req, res) => {
    const address = req.query.walletAddress;
    const message = req.query.message;
    const signature = req.query.signature;
    if (address == null || message == null || signature == null) {
        res.json({
            "response": {
                "status": 400, //或其他状态码
                "charset": "UTF-8", //定义返回内容的编码
                "respond_time": sd.format(new Date(), 'YYYY-MM-DD HH:mm:ss'), //接口响应时间戳
                "result": { //返回的结果
                    "error message": "params walletAddress or message or signature not found",
                }
            }
        });
    }
    const verifyResult = veirySignature(address, message, signature);
    if (!verifyResult) {
        res.json({
            "response": {
                "status": 400, //或其他状态码
                "charset": "UTF-8", //定义返回内容的编码
                "respond_time": sd.format(new Date(), 'YYYY-MM-DD HH:mm:ss'), //接口响应时间戳
                "result": { //返回的结果
                    "error message": "Signature Verify Failed",
                }
            }
        });
    }
    let rel = await new DKPool().getDKPools(address, (queryResult) => {
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
    let formData = req.body;
    if (formData.pool_name == null || formData.pool_desc == null || formData.poolIcon == null ||
        formData.type == null || formData.token_name == null || formData.tokenIcon == null ||
        formData.token_address == null || formData.email == null || formData.walletAddress == null ||
        formData.signature == null || formData.message == null || formData.time_start == null || formData.time_end == null) {
        res.json({
            "response": {
                "status": 400, //或其他状态码
                "charset": "UTF-8", //定义返回内容的编码
                "respond_time": sd.format(new Date(), 'YYYY-MM-DD HH:mm:ss'), //接口响应时间戳
                "result": { //返回的结果
                    "error message": "Form Params Error",
                }
            }
        });
    }
    else {
        const verifyResult = veirySignature(formData.walletAddress, formData.message, formData.signature);
        if (!verifyResult) {
            res.json({
                "response": {
                    "status": 400, //或其他状态码
                    "charset": "UTF-8", //定义返回内容的编码
                    "respond_time": sd.format(new Date(), 'YYYY-MM-DD HH:mm:ss'), //接口响应时间戳
                    "result": { //返回的结果
                        "error message": "Signature Verify Failed",
                    }
                }
            });
        }
        if (!checkName(formData.pool_name) || !checkName(formData.pool_desc)) {
            res.json({
                "response": {
                    "status": 400, //或其他状态码
                    "charset": "UTF-8", //定义返回内容的编码
                    "respond_time": sd.format(new Date(), 'YYYY-MM-DD HH:mm:ss'), //接口响应时间戳
                    "result": { //返回的结果
                        "error message": "Only supports letters and numbers",
                    }
                }
            });
        }
        await new DKPool().createDKPool(formData, (queryResult) => {
            console.log(queryResult)
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
    }
});

//Update a todo.
router.put('/:poolId', async (req, res) => {
    if (req.params.poolId) {

        let formData = req.body;
        if (formData.pool_desc == null || formData.poolIcon == null ||
            formData.token_name == null || formData.tokenIcon == null
            || formData.email == null || formData.walletAddress == null ||
            formData.signature == null || formData.message == null || formData.admin_address) {
            res.json({
                "response": {
                    "status": 400, //或其他状态码
                    "charset": "UTF-8", //定义返回内容的编码
                    "respond_time": sd.format(new Date(), 'YYYY-MM-DD HH:mm:ss'), //接口响应时间戳
                    "result": { //返回的结果
                        "error message": "Form Params Error",
                    }
                }
            });
        }

        const verifyResult = veirySignature(formData.admin_address, formData.message, formData.signature);
        if (!verifyResult) {
            res.json({
                "response": {
                    "status": 400, //或其他状态码
                    "charset": "UTF-8", //定义返回内容的编码
                    "respond_time": sd.format(new Date(), 'YYYY-MM-DD HH:mm:ss'), //接口响应时间戳
                    "result": { //返回的结果
                        "error message": "Signature Verify Failed",
                    }
                }
            });
        }

        let poolId = parseInt(req.params.poolId);
        console.log(poolId);
        // let dkpInfo = req.query;
        if ((poolId | 0) === poolId) {
            await new DKPool().updateDKPool(poolId, formData, (queryResult) => {
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
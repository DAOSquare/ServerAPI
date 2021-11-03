const express = require("express");
const DKPool = require('../controllers/dkp_management');
const sd = require('silly-datetime');
const { veirySignature } = require('../utils/recoverTx');
const { checkName, checkIfInteger } = require('../utils/utils');
const router = express.Router();

//Get all pools.
router.get('/', async (req, res) => {
    if (req.query.walletAddress == null || req.query.message == null || req.query.signature == null) {
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
        return;
    }
    const address = req.query.walletAddress;
    const message = req.query.message;
    const signature = req.query.signature;
    const verifyResult = await veirySignature(address, message, signature);
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
        return;
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

//Get pool by poolId.
router.get('/:poolId', async (req, res) => {
    if (req.params.poolId && checkIfInteger(req.params.poolId)) {
        let rel = await new DKPool().getPoolInfoByPoolID(req.params.poolId, (queryResult) => {
            res.json({
                "response": {
                    "status": 200, //或其他状态码
                    "charset": "UTF-8", //定义返回内容的编码
                    "respond_time": sd.format(new Date(), 'YYYY-MM-DD HH:mm:ss'), //接口响应时间戳
                    "result": queryResult
                }
            });
        });
    }
    else {
        res.json({
            "response": {
                "status": 400, //或其他状态码
                "charset": "UTF-8", //定义返回内容的编码
                "respond_time": sd.format(new Date(), 'YYYY-MM-DD HH:mm:ss'), //接口响应时间戳
                "result": { //返回的结果
                    "error message": "poolId Error",
                }
            }
        });
    }
});

//Create a pool.
router.post('/new_dkpool', async (req, res) => {
    let formData = req.body;
    if (formData.pool_name == null || formData.pool_name == '' ||
        formData.pool_desc == null || formData.pool_desc == '' ||
        formData.poolIcon == null || formData.poolIcon == '' ||
        formData.type == null || formData.type == '' ||
        formData.cost_per_token == null || formData.cost_per_token == '' ||
        formData.token_address == null || formData.token_address == '' ||
        formData.token_name == null || formData.token_name == '' ||
        formData.tokenIcon == null || formData.tokenIcon == '' ||
        formData.time_start == null || formData.time_start == '' ||
        formData.time_end == null || formData.time_end == '' ||
        formData.admin_address == null || formData.admin_address == '' ||
        // formData.note == null || formData.note == '' ||
        formData.email == null || formData.email == '' ||
        formData.walletAddress == null || formData.walletAddress == '' ||
        formData.signature == null || formData.signature == '' ||
        formData.message == null || formData.message == ''
    ) {
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
        return;
    }
    else {
        const verifyResult = await veirySignature(formData.walletAddress, formData.message, formData.signature);
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
            return;
        }
        if (!checkName(formData.pool_name) || !checkName(formData.pool_desc)) {
            res.json({
                "response": {
                    "status": 400, //或其他状态码
                    "charset": "UTF-8", //定义返回内容的编码
                    "respond_time": sd.format(new Date(), 'YYYY-MM-DD HH:mm:ss'), //接口响应时间戳
                    "result": { //返回的结果
                        "error message": "pool_name  && pool_desc Only supports letters and numbers",
                    }
                }
            });
            return;
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

//Update a pool.
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
            return;
        }
        if (!checkName(formData.pool_desc)) {
            res.json({
                "response": {
                    "status": 400, //或其他状态码
                    "charset": "UTF-8", //定义返回内容的编码
                    "respond_time": sd.format(new Date(), 'YYYY-MM-DD HH:mm:ss'), //接口响应时间戳
                    "result": { //返回的结果
                        "error message": "pool_desc Only supports letters and numbers",
                    }
                }
            });
            return;
        }
        const verifyResult = await veirySignature(formData.walletAddress, formData.message, formData.signature);
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
            return;
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

//Audit a pool.
router.put('/audit/:poolId', async (req, res) => {
    if (req.params.poolId) {
        await new DKPool().getPoolInfoByPoolID(req.params.poolId, (queryResult) => {
            if (queryResult.length <= 0) {
                res.json({
                    "response": {
                        "status": 400, //或其他状态码
                        "charset": "UTF-8", //定义返回内容的编码
                        "respond_time": sd.format(new Date(), 'YYYY-MM-DD HH:mm:ss'), //接口响应时间戳
                        "result": { //返回的结果
                            "error message": "Pool Not Found By poolId " + req.params.poolId,
                        }
                    }
                });
                return;
            }
        })
        let formData = req.body;
        if (formData.audit_result == null || formData.walletAddress == null ||
            formData.signature == null || formData.message == null) {
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
            return;
        }
        if (checkIfInteger(formData.audit_result) && (parseInt(formData.audit_result) == 2 || parseInt(formData.audit_result) == 3)) {

        } else {
            res.json({
                "response": {
                    "status": 400, //或其他状态码
                    "charset": "UTF-8", //定义返回内容的编码
                    "respond_time": sd.format(new Date(), 'YYYY-MM-DD HH:mm:ss'), //接口响应时间戳
                    "result": { //返回的结果
                        "error message": "audit_result can only be equal to 2 or 3",
                    }
                }
            });
            return;
        }
        const verifyResult = await veirySignature(formData.walletAddress, formData.message, formData.signature);
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
            return;
        }

        let poolId = parseInt(req.params.poolId);
        console.log(poolId);
        // let dkpInfo = req.query;
        if ((poolId | 0) === poolId) {
            await new DKPool().auditDKPool(poolId, formData, (queryResult) => {
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

//Delete a pool.
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
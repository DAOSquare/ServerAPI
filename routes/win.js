const express = require("express");
const Win = require('../controllers/win_management');
const NFTCost = require('../controllers/nft_cost_dkp_management');
const sd = require('silly-datetime');
const { getSignedAddressFromSignedTx, veirySignature } = require('../utils/recoverTx');
const { checkName, checkIfInteger } = require('../utils/utils');

const router = express.Router();

//Get all wins.
router.get('/', async (req, res) => {
    const address = req.query.wallet_address;
    const message = req.query.message;
    const signature = req.query.signature;
    if (address == null || message == null || signature == null) {
        res.json({
            "response": {
                "status": 400, //或其他状态码
                "charset": "UTF-8", //定义返回内容的编码
                "respond_time": sd.format(new Date(), 'YYYY-MM-DD HH:mm:ss'), //接口响应时间戳
                "result": { //返回的结果
                    "error message": "params wallet_address or message or signature not found",
                }
            }
        });
        return;
    }
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

    let rel = await new Win().getWins(address, (queryResult) => {
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


//Get  wininfo by winid.
router.get('/:winId', async (req, res) => {
    if (req.params.winId && checkIfInteger(req.params.winId)) {
        let rel = await new Win().getwinnfoByWinID(req.params.winId, (queryResult) => {
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
                    "error message": "winId Error",
                }
            }
        });
    }
});


//Create a win.
router.post('/new_win', async (req, res) => {
    let formData = req.body;
    console.log(formData.cost_per_nft)
    const costNFTList = JSON.parse(formData.cost_per_nft);
    if (formData.nft_name == null || formData.nft_name.length == 0 ||
        formData.nft_description == null || formData.nft_description.length == 0 ||
        formData.pool_name == null || formData.pool_name.length == 0 ||
        formData.nft_icon == null || formData.nft_icon.length == 0 ||
        formData.cost_per_nft == null || formData.cost_per_nft == '' ||
        formData.total_num_of_mint == null || formData.total_num_of_mint == '' ||
        formData.time_start == null || formData.time_start.length == '' ||
        // formData.time_end == null || formData.time_end == '' ||
        formData.wallet_address == null || formData.wallet_address.length == 0 ||
        formData.signature == null || formData.signature.length == 0 ||
        formData.message == null || formData.message.length == 0 ||
        costNFTList.length > 4 || costNFTList.length == 0
    ) {
        res.json({
            "response": {
                "status": 400, //或其他状态码
                "charset": "UTF-8", //定义返回内容的编码
                "respond_time": sd.format(new Date(), 'YYYY-MM-DD HH:mm:ss'), //接口响应时间戳
                "result": { //返回的结果
                    "error message": "Form Data Error",
                }
            }
        });
    } else {
        const verifyResult = await veirySignature(formData.wallet_address, formData.message, formData.signature);
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
        if (!checkIfInteger(formData.total_num_of_mint) ||
            !checkIfInteger(formData.time_start)) {
            res.json({
                "response": {
                    "status": 400, //或其他状态码
                    "charset": "UTF-8", //定义返回内容的编码
                    "respond_time": sd.format(new Date(), 'YYYY-MM-DD HH:mm:ss'), //接口响应时间戳
                    "result": { //返回的结果
                        "error message": "total_num_of_mint && time_start must be numbers",
                    }
                }
            });
            return;
        }
        await new Win().createWin(formData, costNFTList, (queryResult) => {
            console.log(queryResult);
            if (queryResult && queryResult.affectedRows > 0) {
                // new NFTCost().create((queryResult) => { })
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

//Update a win.
router.put('/:winId', async (req, res) => {
    if (!req.params.winId) {
        res.send("no winId provided")
    }


    let formData = req.body;
    if (
        formData.nft_icon == null ||
        formData.wallet_address == null ||
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

    const verifyResult = await veirySignature(formData.wallet_address, formData.message, formData.signature);
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

    let winId = req.params.winId;
    await new Win().updateWin(winId, formData, (queryResult) => {
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

//Audit a win.
router.put('/audit/:winId', async (req, res) => {
    if (req.params.winId && checkIfInteger(req.params.winId)) {
        await new Win().getwinnfoByWinID(req.params.winId, (queryResult) => {
            if (queryResult.length <= 0) {
                res.json({
                    "response": {
                        "status": 400, //或其他状态码
                        "charset": "UTF-8", //定义返回内容的编码
                        "respond_time": sd.format(new Date(), 'YYYY-MM-DD HH:mm:ss'), //接口响应时间戳
                        "result": { //返回的结果
                            "error message": "NFT Not Found By winId " + req.params.poolId,
                        }
                    }
                });
            }
            return;
        })
        let formData = req.body;
        if (formData.audit_result == null || formData.audit_result == '' ||
            formData.wallet_address == null || formData.wallet_address.length == 0 ||
            formData.signature == null || formData.signature.length == 0 ||
            formData.message == null || formData.message.length == 0) {
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
        const verifyResult = await veirySignature(formData.wallet_address, formData.message, formData.signature);
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

        let winId = parseInt(req.params.winId);
        console.log(winId);
        // let dkpInfo = req.query;
        if ((winId | 0) === winId) {
            await new Win().auditWin(winId, formData, (queryResult) => {
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
        res.send("no winId provided")
    }
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
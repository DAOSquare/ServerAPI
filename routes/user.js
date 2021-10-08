const express = require("express");
const UserInfo = require('../controllers/user_info_magement');
const UserLoginInfo = require('../controllers/user_login_info_management');
const sd = require('silly-datetime');
const { veirySignature } = require('../utils/recoverTx');
const { checkName, checkIfInteger, verifyAddress } = require('../utils/utils');
const router = express.Router();

//Get userInfo by walletAddress.
router.get('/user_info/:walletAddress', async (req, res) => {
    if (req.params.walletAddress && verifyAddress(req.params.walletAddress)) {
        let rel = await new UserInfo().getUserInfoByAddress(req.params.walletAddress, (queryResult) => {
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

//Get userInfo by walletAddress.
router.get('/user_login_info/:walletAddress', async (req, res) => {
    if (req.params.walletAddress && verifyAddress(req.params.walletAddress)) {
        let rel = await new UserLoginInfo().getUserLoginInfoByAddress(req.params.walletAddress, (queryResult) => {
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
//register new wallet address.
router.post('/regiser', async (req, res) => {
    let formData = req.body;
    if (formData.walletAddress == null || formData.walletAddress == '' ||
        formData.role == null || formData.pool_desc == '' ||
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

        await new UserInfo().register(formData, (queryResult) => {
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

//record login info.
router.post('/login', async (req, res) => {
    let formData = req.body;
    if (formData.walletAddress == null || formData.walletAddress == '' ||
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

        await new UserLoginInfo().addLoginRecord(formData, (queryResult) => {
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


module.exports = router;
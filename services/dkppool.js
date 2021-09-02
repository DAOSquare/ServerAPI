require('../utils/constant');
const Web3 = require('web3')
require('ethers');
const sd = require('silly-datetime');


const {
    queryOne,
    randomCode,
    redirect_uri,
    uploadToken
} = require('../utils/index');
const md5 = require('../utils/md5');
const jwt = require('jsonwebtoken');
const boom = require('boom');
const fs = require('fs');
const path = require('path');
const { body, validationResult } = require('express-validator');
const {
    CODE_ERROR,
    CODE_SUCCESS,
    PRIVATE_KEY,
    JWT_EXPIRED,
    DKPOOL_CONTRACT_ABI,
    DKPOOL_CONTRACT_ADDRESS_RINKEBY
} = require('../utils/constant');
// const { decode } = require('../utils/user-jwt');
const svgCaptcha = require('svg-captcha');
const smsConfig = require('../utils/smsConfig');
const uuid = require('node-uuid');
const moment = require('moment');

const provider = new Web3.providers.HttpProvider(process.env.INFURA_RINKEBY_ENDPOINT)
const web3 = new Web3(provider)

const dkpoolContract = new web3.eth.Contract(DKPOOL_CONTRACT_ABI, DKPOOL_CONTRACT_ADDRESS_RINKEBY);


// 创建新池子，并返回池子Id
const newPool = (req, res, next) => {
    const err = validationResult(req);
    if (!err.isEmpty()) {
        const [{ msg }] = err.errors;
        next(boom.badRequest(msg));
    } else {
        // console.log('uploadToken===', uploadToken);
        const poolid = await dkpoolContract.createPool().send({ from: from }, function (err, result) {
            if (err) {
                console.log(err)
            }
            console.log(result)
        })

        const txData = {
            gasLimit: web3.utils.toHex(6000000),
            // gasPrice: web3.utils.toHex(web3.utils.toWei('50', 'Gwei')), // 10 Gwei
            to: UNISWAP_V2_EXCHANGE_ADDRESS,
            from: SETTINGS.from,
            value: web3.utils.toHex(SETTINGS.value), // Amount of Ether to Swap
            data: encodeABI
        }

        res.json({
            code: CODE_SUCCESS,
            charset: "UTF-8",
            respond_time: sd.format(new Date(), 'YYYY-MM-DD HH:mm:ss'), //接口响应时间戳,
            result: { //返回的结果
                poolId: poolid, //创建的池子Id
                pointName: "DKP1" //新池子使用的DKP点数名称
            }
        })
    }

}
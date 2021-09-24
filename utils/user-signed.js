/**
 * 描述: 验证签名和解析函数
 * 作者: Benjamin
 * 日期: 2020-9-2
 */
const Web3 = require('web3');
const web3 = new Web3(process.env.INFURA_RINKEBY_ENDPOINT);
// const jwt = require('jsonwebtoken'); // 引入验证jsonwebtoken模块
// const expressJwt = require('express-jwt'); // 引入express-jwt模块
const sd = require('silly-datetime');

const {
    PRIVATE_KEY
} = require('./constant'); // 引入自定义的jwt密钥

// 验证token是否过期
/*
const jwtAuth = expressJwt({
    // 设置密钥
    secret: PRIVATE_KEY,
    // 设置为true表示校验，false表示不校验
    credentialsRequired: true,
    // 自定义获取token的函数
    getToken: (req) => {
        if (req.headers.authorization) {
            return req.headers.authorization;
        } else if (req.query.token) {
            return req.query.token;
        } else if (req.body.token) {
            return req.body.token;
        }
    }
    // 设置jwt认证白名单，比如/api/login登录接口不需要拦截
}).unless({
    path: [
        '/',
        '/api/users/getCaptcha',
        '/api/users/sendCoreCode',
        '/api/users/login',
        '/api/users/loginPwd',
        '/api/users/oauthGithub',
        '/api/users/oauthWeibo',
    ]
})
*/
// jwt-token解析
const decode = (req, res, next) => {
    // console.log(req);
    const rawSignedTransaction = req.get('rawSignedTransaction');
    console.log('rawSignedTransaction:', rawSignedTransaction);
    if (rawSignedTransaction.length <= 0) {
        res.json({
            "response": {
                "status": 404, //或其他状态码
                "charset": "UTF-8", //定义返回内容的编码
                "respond_time": sd.format(new Date(), 'YYYY-MM-DD HH:mm:ss'), //接口响应时间戳
                "message": "Signed Message Not Found"
            }
        });
    }
    const siginedAddr = web3.eth.accounts.recoverTransaction(rawSignedTransaction);
    console.log('siginedAddr: ', siginedAddr);
    if (siginedAddr.length <= 0) {
        res.json({
            "response": {
                "status": 404, //或其他状态码
                "charset": "UTF-8", //定义返回内容的编码
                "respond_time": sd.format(new Date(), 'YYYY-MM-DD HH:mm:ss'), //接口响应时间戳
                "message": "Signature Varification Failed"
            }
        });
    }
    next();

}

module.exports = {
    // jwtAuth,
    decode
}
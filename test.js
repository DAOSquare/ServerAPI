const Web3 = require('web3');
const web3 = new Web3(process.env.INFURA_RINKEBY_ENDPOINT);
const address = process.env.ACCOUNT_ADDDRESS_RINKEBY;  //签名账户，需要解锁
let msg = web3.utils.utf8ToHex("Hello world")  //要发送的data
//let msg = "Hello world";
//签名 有好多种方式去签名

web3.eth.accounts.signTransaction({
    from: address,
    gasPrice: "20000000000",
    gas: "53176",
    to: address,
    value: "0",
    data: msg
}, "0x" + process.env.ACCOUNT_PRIVATE_KEY_RINKEBY).then(function (receipte) {
    console.log(receipte);

    let r = receipte.rawTransaction.slice(0, 66)
    let s = '0x' + receipte.rawTransaction.slice(66, 130)
    let v = '0x' + receipte.rawTransaction.slice(130, 132)

    console.log('r', r) //签名的前32个字节
    console.log('s', s) //签名的后32个字节
    console.log('v', v)//恢复值+ 27
    console.log(web3.utils.toDecimal(v));
    console.log('recover sign address: ', web3.eth.accounts.recoverTransaction(receipte.rawTransaction));
    console.log('sign address: ', address);
    //验证
    console.log("原始rlp编码验证：", web3.eth.accounts.recover(msg, receipte.rawTransaction));
}).catch((error) => {
    console.log(error);
});
/*
let signature = web3.eth.sign(msg, address).then(function (receipte) {

    console.log(receipte);

    let r = receipte.slice(0, 66)
    let s = '0x' + receipte.slice(66, 130)
    let v = '0x' + receipte.slice(130, 132)

    console.log('r', r) //签名的前32个字节
    console.log('s', s) //签名的后32个字节
    console.log('v', v)//恢复值+ 27
    console.log(web3.utils.toDecimal(v));


    //验证
    console.log("原始rlp编码验证：", web3.eth.accounts.recover(msg, receipte));

    // message, v, r, s
    console.log("vrs验证：", web3.eth.accounts.recover(msg, v, r, s));

    //打印下签名的人
    console.log("签名者是", address)
}).catch((error) => {
    console.log(error);
});*/
const Web3 = require('web3');
const web3 = new Web3(process.env.INFURA_RINKEBY_ENDPOINT);
const address = process.env.RINKEBY_ACCOUNT;  //签名账户，需要解锁
//let msg = "Hello world";
//签名 有好多种方式去签名

let msg = web3.utils.utf8ToHex("Hello world");  //要发送的data


(async () => {
    const receipte = await web3.eth.accounts.sign(
        msg, "0x" + process.env.RINKEBY_PRIVATE_KEY);
    console.log(receipte);
    console.log(web3.utils.hexToUtf8(msg))
    // let r = receipte.rawTransaction.slice(0, 66)
    // let s = '0x' + receipte.rawTransaction.slice(66, 130)
    // let v = '0x' + receipte.rawTransaction.slice(130, 132)

    // console.log('r', r) //签名的前32个字节
    // console.log('s', s) //签名的后32个字节
    // console.log('v', v)//恢复值+ 27
    // console.log(web3.utils.toDecimal(v));
    console.log('recover sign address: ', (await web3.eth.accounts.recover(receipte.message, receipte.signature)));
    console.log('sign address: ', address);
    //验证
    // const pubkey = web3.eth.accounts.recover({
    //     messageHash: '0x31c2f03766b36f0346a850e78d4f7db2d9f4d7d54d5f272a750ba44271e370b1',
    //     v: '0x25',
    //     r: '0xc9cf86333bcb065d140032ecaab5d9281bde80f21b9687b3e94161de42d51895',
    //     s: '0x727a108a0b8d101465414033c3f705a9c7b826e596766046ee1183dbc8aeaa68'
    // });
    // console.log(pubkey);
    // console.log(pubkey === address);

})()
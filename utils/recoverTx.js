const { Signer, sign } = require('crypto');
const Web3 = require('web3');
const web3 = new Web3(process.env.INFURA_RINKEBY_ENDPOINT);
// const account = web3.eth.accounts.privateKeyToAccount('0x' + process.env.PRIVA_KEY);
const address = process.env.RINKEBY_ACCOUNT;  //签名账户，需要解锁
const prikey = process.env.RINKEBY_PRIVATE_KEY;
const getSignedAddressFromSignedTx = (rawTransaction) => {
    const siginedAddr = web3.eth.accounts.recoverTransaction(rawTransaction);
    return siginedAddr;
}


// exports.getSignedAddressFromSignedTx = getSignedAddressFromSignedTx;

module.exports = {
    getSignedAddressFromSignedTx,
    veirySignature
}

async function signMessage(message, prikey) {
    const sig = await web3.eth.accounts.sign(message, "0x" + process.env.RINKEBY_PRIVATE_KEY);
    return sig;
}

async function veirySignature(address, message, signature) {
    const signaddr = await web3.eth.accounts.recover(message, signature);
    return address == signaddr;
}
(async () => {
    const sig = await signMessage('hello', address);
    console.log(await veirySignature(address, 'hello', sig.signature));
})();



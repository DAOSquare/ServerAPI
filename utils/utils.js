

function checkName(nubmer) {
    var re = /^[0-9a-zA-Z]*$/;  //判断字符串是否为数字和字母组合     
    if (!re.test(nubmer)) {
        return false;
    } else {
        return true;
    }
}

// console.log(checkName('~fsfsdf2'));
function checkIfInteger(str) {
    var re = /^[0-9]*$/;  //判断字符串是否为数字和字母组合     
    if (!re.test(str)) {
        return false;
    } else {
        return true;
    }
}
module.exports = {
    checkName,
    checkIfInteger
}
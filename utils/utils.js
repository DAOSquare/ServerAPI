

function checkName(nubmer) {
    console.log(nubmer);
    var re = /^[0-9a-zA-Z]*$/;  //判断字符串是否为数字和字母组合     
    if (!re.test(nubmer)) {
        return false;
    } else {
        return true;
    }
}

// console.log(checkName('~fsfsdf2'));

module.exports = {
    checkName
}
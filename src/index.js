module.exports = function check(str, bracketsConfig) {
    bracketsConfig = bracketsConfig.map((b) => b.join(""));

    for (let i = 0; i < bracketsConfig.length; i++) {
        if (str.includes(bracketsConfig[i])) {
            str = str.replace(bracketsConfig[i], "");
            i = -1;
        }
    }
    return str ? false : true;
}
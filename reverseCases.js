const toAlternatingCaseR = (value) => {
    let res = "";
    for (var i = 0; i < value.length; i++) {
        const ch = value[i];
        res = res + (ch == ch.toLowerCase() ? ch.toUpperCase() : ch.toLowerCase());
    }
    return res;
};

const toAlternatingCase = (value) => {
    const newValue = value.split('');
    const result = [];

    for (var i = 0; i < newValue.length; i++) {
        if (newValue[i] === newValue[i].toLowerCase()) {
            result.push(newValue[i].toUpperCase())
        } else {
            result.push(newValue[i].toLowerCase())
        }
    }
    return result.join('')
};

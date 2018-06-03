const bracketsAreBalanced = (value) => {
    let counter = 0;
    for (let i = 0; i < value.length; ++i) {
        if (value[i] == "[") {
            ++counter
        } else if (value[i] == "]") {
            counter--
        }
    }
    const res = counter == 0;
    return res;
}

const bracketsAreBalancedM = (value) => {
    const newValue = value.split('');
    let openingBrac = 0;
    let closingBrac = 0;

    for (var i = 0; i <= newValue.length; i++) {
        if (newValue[i] == "[") {
            openingBrac = openingBrac + 1;
            console.log("opening", openingBrac)
        }
    }
    for (var i = 0; i <= newValue.length; i++) {
        if (newValue[i] == "]") {
            closingBrac = closingBrac + 1;
            console.log("closing", closingBrac)
        }
    }

    if (openingBrac == closingBrac) {
        return true
    } else return false
};
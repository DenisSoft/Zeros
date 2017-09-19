module.exports = function zeros(expression) {
    const list = expression.split('*');
    let result = "1";
    for (let i = 0; i < list.length; i++) {
        if (list[i][list[i].length - 2] === '!') {
            result = multiply(result, doubleFactorial(list[i].replace("!!", "")));
        } else {
            if (list[i][list[i].length - 1] === '!') {
                result = multiply(result, factorial(list[i].replace("!", "")));
            }
        }
    }
    return getCountsOfDigits(result);
};

function doubleFactorial(n) {
    const even = n % 2 === 0;
    let j = 1;
    for (let i = even ? 2 : 1; i <= n; i += 2) {
        j = multiply(j.toString(), i.toString());
    }
    return j;
}

function factorial(n) {
    let j = 1;
    for (i = 1; i <= n; i++) {
        j = multiply(j.toString(), i.toString());
    }
    return j;
}

function getCountsOfDigits(num) {
    let count = 0;
    for (let i = num.length - 1; num[i] === '0'; i--) {
        count++;
    }
    return count;
}

function multiply(first, second) {
    let i;
    first = first.split('').reverse();
    second = second.split('').reverse();
    let result = [];
    for (i = 0; first[i] >= 0; i++) {
        for (let j = 0; second[j] >= 0; j++) {
            if (!result[i + j]) {
                result[i + j] = 0;
            }
            result[i + j] += first[i] * second[j];
        }
    }
    for (i = 0; result[i] >= 0; i++) {
        if (result[i] >= 10) {
            if (!result[i + 1]) {
                result[i + 1] = 0;
            }
            result[i + 1] += parseInt(result[i] / 10);
            result[i] %= 10;
        }
    }
    return result.reverse().join('');
}


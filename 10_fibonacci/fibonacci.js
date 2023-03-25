const fibonacci = function(num) {
    Number(num);
    if (num < 0){
        return 'OOPS';
    }
    if (num === 1 || num ===2){
        return 1;
    }
    let first = 0;
    let second = 1;
    let total = 1;
    count = 1;
    while (count < num){
        total = first + second;
        first = second;
        second = total;
        count += 1;
    }
    return total;
};

// Do not edit below this line
module.exports = fibonacci;

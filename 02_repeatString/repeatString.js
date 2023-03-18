const repeatString = function(word, num) {
    let x = 0;
    let string = ''
    if (num < 0){
        string = 'ERROR'
    }
    while (x < num){
        string += word;
        x++;
    }
    return string;
};

// Do not edit below this line
module.exports = repeatString;

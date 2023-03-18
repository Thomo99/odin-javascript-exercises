const sumAll = function(num1, num2) {
    if (num1 < 0 || num2 < 0 || !Number.isInteger(num1) || !Number.isInteger(num2)){
      return 'ERROR';  
    }
    let total = 0;
    if (num1<num2){
        while (num1 <=num2){
            total+=num1;
            num1++;
        }
    } else if (num1>num2){
        while (num2 <=num1){
            total+=num2;
            num2++;
        }
    }
    return total;
};

// Do not edit below this line
module.exports = sumAll;

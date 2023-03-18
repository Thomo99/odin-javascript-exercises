const removeFromArray = function(array, toRemove) {
    index = array.indexOf(toRemove);
    array.splice(index, 1);

    return array;
};

// Do not edit below this line
module.exports = removeFromArray;

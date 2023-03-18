const removeFromArray = function(array, ...args) {
//     let newArray = [];
//     for (i in array) {
//         if(!args.includes(i)){
//             newArray.push(i);
//         }
//     }

//     return newArray;
const newArray = [];
  // use forEach to go through the array
  array.forEach((item) => {
    // push every element into the new array
    // UNLESS it is included in the function arguments
    // so we create a new array with every item, except those that should be removed
    if (!args.includes(item)) {
      newArray.push(item);
    }
  });
  // and return that array
  return newArray;

};
// let arr = [1,2,3,4]
// removeFromArray(, 3);
// console.log()

// Do not edit below this line
module.exports = removeFromArray;

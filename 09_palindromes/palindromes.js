const palindromes = function (str) {
      // Remove punctuation and convert to lowercase
  str = str.replace(/[^\w]/g, '').toLowerCase();
  
  // Reverse the string and compare to original
  return str === str.split('').reverse().join('');
};

// Do not edit below this line
module.exports = palindromes;

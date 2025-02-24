const palindromes = function (string) {
  let cleanedString = string.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  let reverseStr = cleanedString.split("").reverse().join("");
  return reverseStr === cleanedString;
};

// Do not edit below this line
module.exports = palindromes;

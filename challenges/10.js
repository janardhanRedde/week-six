//Return the number of vowels in a string

const countVowels = str => Array.from(str)
  .filter(letter => 'aeiou'.includes(letter)).length;

console.log(countVowels("janardhan"));

console.log(countVowels("skibble"));

console.log(countVowels("volleyball"));

console.log(countVowels("aeiou"));

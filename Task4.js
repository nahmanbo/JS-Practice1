const str = "Hello World AEIOU";
const vowels = "aeiou";
const result = {};

const isVowel = char => vowels.includes(char.toLowerCase());

str.toLowerCase().split("").forEach(char => {
    if (isVowel(char)) {
        result[char] = result[char] ? result[char] + 1 : 1;
    }
});

console.log(result);

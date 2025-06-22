let word1 = "hello";
let word2 = "world";

console.log("before changes:")
console.log(`word1 = ${word1}`);
console.log(`word2 = ${word2}`);

word1 = word1 + word2;    
word2 = word1.slice(0, word1.length - word2.length);   
word1 = word1.slice(word2.length);          

console.log("\nafter changes:")
console.log(`word1 = ${word1}`);
console.log(`word2 = ${word2}`);
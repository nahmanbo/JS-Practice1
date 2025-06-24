const str = "hello world";
let UpperCaseStr = "";

str.split("").forEach(char => {
    UpperCaseStr += char.toUpperCase();
});

console.log(UpperCaseStr);
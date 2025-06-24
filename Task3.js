let family = {parents: {}, children: [{ name: "Ali" },{ name: "Lea" },{ name: "Mona" }]};

console.log(family.children[2].name);

let names = "";
for (let i = 0; i < family.children.length; i++) {
    names += family.children[i].name;
    names += ", ";
}
console.log(names);


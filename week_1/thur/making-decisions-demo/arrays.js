/*
    In this file, we'll be continuing our story
    with Jon being allowed to flee his fight with Jamie.
*/

let backpack = [];

backpack.push("sword");
backpack.push("shield");
backpack.push("food");

console.log(backpack)

backpack.splice(1,1)
let furCoat = "Fur Coat"
backpack.push(furCoat)
console.log(backpack)

backpack.pop()
console.log(backpack)

let itemCount = backpack.length
console.log(`Number of item(s): ${itemCount}`)


backpack.push("flint", "blanket", "knife", "toothbrush", "glasses")
itemCount = backpack.length
console.log(backpack)
console.log(`Number of item(s): ${itemCount}`)

let samBag = backpack.slice(1)
console.log(samBag)

let backpack2 = backpack.splice(backpack.length/2)
console.log(`Bag 1: ${backpack}`)
console.log(`Bag 2: ${backpack2}`)

for (let i = 0; i <backpack.length; i++){
    console.log('***', backpack[i])
}

for (let i = 0; i <backpack2.length; i++){
    console.log('---', backpack2[i])
}
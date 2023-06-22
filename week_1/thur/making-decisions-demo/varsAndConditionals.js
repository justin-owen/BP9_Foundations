/*
    In this file, we'll be using variables, conditionals,
    and loops to play out a fight between Jon Snow and
    Jamie Lannister.
*/ 

let jonSnowAttack = 25;
let jamieLannisterAttack = 35;
if (jonSnowAttack > jamieLannisterAttack){
    console.log("Jon's attack is greater than Jamie's.")
}else if (jamieLannisterAttack > jonSnowAttack){
    console.log("Jamie's attack is greater than Jon's.")
}else{
    console.log("Jon and Jamie's attack is equal.")
}

let jonSnowHealth = 100;
let jonSnowDefense = 0;
if (jonSnowHealth - jamieLannisterAttack <= 0){
    console.log("Jon Snow has been slain.")
}else{
    jonSnowHealth -= jamieLannisterAttack
    console.log(`Jon Snow's health is now ${jonSnowHealth}.`)
}

jonSnowDefense += 25;

if (jonSnowHealth - jamieLannisterAttack + jonSnowDefense <= 0){
    console.log("Jon Snow has been slain.")
}else{
    jonSnowHealth = jonSnowHealth - (jamieLannisterAttack - jonSnowDefense)
    console.log(`Jon Snow's health is now ${jonSnowHealth}.`)
}

let healthPack = 50;
if (jonSnowHealth + healthPack <= 100){
    jonSnowHealth += healthPack
}else{
    jonSnowHealth = 100;
}
console.log(`Jon Snow's health is now ${jonSnowHealth}.`)


let coinLandsHeads = true;

if (coinLandsHeads === false){
    console.log("Jon runs away.")
}else{
    console.log("The fight continues!")
}

// for (let i = 1;i <= 5;i++){
//     jonSnowHealth = jonSnowHealth - (jamieLannisterAttack - jonSnowDefense)
//     console.log(`Jon Snow's health is now ${jonSnowHealth}`)
// }

// for (let i = 1;i <= 5;i++){
//     if (jonSnowHealth - (jamieLannisterAttack - jonSnowDefense) <= 0){
//         console.log("Jon has been slain!")
//     }else{
//         jonSnowHealth = jonSnowHealth - (jamieLannisterAttack - jonSnowDefense)
//         console.log(`Jon's health is now ${jonSnowHealth}.`)
//     }
// }

while(jonSnowHealth > 0){
    jonSnowHealth = jonSnowHealth - (jamieLannisterAttack - jonSnowDefense)
    console.log(`Jon's health is now ${jonSnowHealth}.`)
    if (jonSnowHealth <= 0){
        console.log("Jon has been slain!")
    }
}
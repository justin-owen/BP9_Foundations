// Write your code below
let str = 'watrmelon'
let chars = {}

function hasUniqueChars(str){
    for (char of str){
        if ((char in chars)=== false){
            chars[char] = true
        }else{
            return `Not all unique characters.`
        }
    }
    console.log(chars)
    return `All unique characters.`
}

console.log(hasUniqueChars(str))
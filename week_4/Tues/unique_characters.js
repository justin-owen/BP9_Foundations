
function uniqueString(str){
    let chars = {}
    str = str.trim().toLowerCase()
    let unique = ''
    for (let letter of str){
        if(letter in chars === false){
            chars[letter] = true
            unique += letter
        } 
    }
    return unique
}

console.log(uniqueString("helloworld")); //helowrd
console.log(uniqueString("iwanttoclimbamountain")); //iwantoclmbu
console.log(uniqueString("  eASjgSE ")); //easjg
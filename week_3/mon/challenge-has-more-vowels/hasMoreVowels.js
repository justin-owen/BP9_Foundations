let vowels = ["a", "e", "i", "o", "u", "y"]
function moreVowels (word){
    let vowelCount = 0
    let consonantCount = 0
    for (let char of word){
        if(vowels.includes(char.toLowerCase())){
            vowelCount++
        }else{
            consonantCount++
        }
    }
    if (vowelCount > consonantCount){
        return true
    }else{
        return false
    }
}
console.log(moreVowels("coconut"))
console.log(moreVowels("AEiOutt"))
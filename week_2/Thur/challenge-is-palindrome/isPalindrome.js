// Write your code below
const ifPalindrome = string => {
    let reverseString = ''
    for(i=string.length-1;i>=0;i--){
        reverseString += string[i]
    }
    return reverseString === string
}   

const multiply = num => num*4
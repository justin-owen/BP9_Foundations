function reverseDigits(num){
    let reverseArray = []
    while(num > 0){
        reverseArray.push(num % 10)
        num = Math.floor(num / 10)
        
    }
    let reverseNumber = reverseArray.join(',')
    return reverseNumber
}
console.log(reverseDigits(314))
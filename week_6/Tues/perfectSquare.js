function nextPerfectSquare(num){
    let square = Math.sqrt(num)
    if (square % 1 === 0){
        return Math.pow(square + 1, 2)
    }
    return -1
        
    
}
console.log(nextPerfectSquare(9))// should return 16 (3x3=9, 4x4=16)

console.log(nextPerfectSquare(289)) // should return 324 (17x17=289 18x18=324)

console.log(nextPerfectSquare(3000)) // should return -1 (sq root of 3000 is 54.77)
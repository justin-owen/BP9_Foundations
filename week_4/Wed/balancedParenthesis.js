function balancedPar(str){
    let count = 0
    for (char of str){
        if (char === '('){
            count++
        }else if (char === ')'){
            count--
        }
    }
    return count === 0 ? true : false
}
console.log(balancedPar('()()()()()'))
console.log(balancedPar(')())()()()'))
console.log(balancedPar('()()fggyuwgq)'))
console.log(balancedPar('uhouyfluyv()'))
console.log(balancedPar('(kgvkvvl)'))
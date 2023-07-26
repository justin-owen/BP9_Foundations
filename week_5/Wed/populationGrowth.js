function popGrowth(p0, percent, aug, p){
    let years = 0
    while (p0 < p){
        p0 = (p0 * (percent/100)) + p0 + aug
        years++
    }
    return years
}
console.log(popGrowth(1500, 5, 100, 5000))
console.log(popGrowth(1500000, 2.5, 10000, 2000000))
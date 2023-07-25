function buildTower(num){
    const tower = []
    let i = 1;
    let spaceInc = num
    while (i <= num){
        const star = '*'
        const space = ' '
        tower.push(space.repeat(spaceInc-1)+star.repeat(i*2-1)+space.repeat(spaceInc-1))
        i++
        spaceInc--
    }
    return tower
}
console.log(buildTower(3))
console.log(buildTower(6))

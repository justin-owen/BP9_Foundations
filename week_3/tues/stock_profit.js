function best(prices){
    let profits = []
    let buyIdx = 0
    let sellIdk = 1
    for(buyIdx; buyIdx < prices.length - 1){
        for (let sell of prices){
            if (sell - buy > 0){
                profits.push(sell - buy)
            }
        }

    }
    if (profits.length === 0){
        return 0
    }else{
        return Math.max(...profits)
    }
}










console.log(best([1, 2, 3, 4, 5]))
// 4 - buy at $1, sell at $5

console.log(best([2, 3, 10, 6, 4, 8, 1]))
// 8 - buy at $2, sell at $10

console.log(best([7, 9, 5, 6, 3, 2]))
// 2 - buy at $7, sell at $9

console.log(best([0, 100]))
// 100 - buy at $0, sell at $100

console.log(best([5, 4 , 3, 2, 1]))
// 0

console.log(best([100]))
// 0

console.log(best([100, 0]))
// 0
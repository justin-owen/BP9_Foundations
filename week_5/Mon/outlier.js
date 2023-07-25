function findOutlier(arr){
    let even = []
    let odd = []
    for (num of arr){
        if (num % 2 === 0){
            even.push(num)
        }else{
            odd.push(num)
        }
    }if (even.length === 1){
        return even.join('')
    }else{
        return odd.join('')
    }
}
console.log(findOutlier([2, 4, 0, 100, 4, 11, 2602, 36]))
console.log(findOutlier([160, 3, 1719, 19, 11, 13, -21]))
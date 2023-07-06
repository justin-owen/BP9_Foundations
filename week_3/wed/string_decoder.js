function decodeString(str){
    let index = 0
    let decodedStr = ''
    let arr = str.split('')
    while (index < arr.length){
        index += Number(arr[index]) + 1
        decodedStr += arr[index]
        index += 1
    }
    return decodedStr
}
// '0h2xce5ngbrdy' => 'hey'
// '3vdfn' => 'n'
// '0r' => 'r'
// '2bna0p1mp2osl0e' => 'apple'
//  '0y4akjfe0s' => 'yes'
console.log(decodeString('0h2xce5ngbrdy'))
console.log(decodeString('3vdfn'))
console.log(decodeString('0r'))
console.log(decodeString('2bna0p1mp2osl0e'))
console.log(decodeString('0y4akjfe0s'))
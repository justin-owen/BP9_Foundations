function stringDecoder(str){
    let decodedStr = ''
    let charShift = Number(str[0])
    for (let i = 1; i < str.length; i++){
        let shiftedChar = String.fromCharCode(str.charCodeAt(i) + charShift)
        decodedStr += shiftedChar
    }
    return decodedStr
}

console.log(stringDecoder("1a")); // 'b'
console.log(stringDecoder("3ce")); // 'fh'
console.log(stringDecoder("2fcjjm")); // 'hello' 
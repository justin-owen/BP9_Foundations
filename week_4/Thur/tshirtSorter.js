let tshirtValue = {s:1, m:2, l:3}
function tshirtSorter(str){
    str = str.trim().toLowerCase()
    arr = str.split('')
    arr.sort((a,b)=> tshirtValue[a] - tshirtValue[b])
    arr = arr.join('')
    return arr
}
console.log(tshirtSorter('smlsmlsml'))
console.log(tshirtSorter('sssslllllmmmmssss'))
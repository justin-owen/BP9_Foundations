function romanNumeral(num){   
    let roman = ''
    const romans = {'M':1000, 'D':500, 'C':100, 'L':50, 'X':10, 'V':5, 'I':1 }
        
        for (let i in romans){
            while (num >= romans[i]){
                roman += i
                num -= romans[i]
            }
        }
        return roman
    }
console.log(romanNumeral(5))
console.log(romanNumeral(267))

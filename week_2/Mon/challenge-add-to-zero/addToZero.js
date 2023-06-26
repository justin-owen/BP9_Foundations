// Starting array
let array = [28, 43, -12, 30, 4, 0, 12]

// Write your solution below:
array.sort()
// console.log(array)
let low = 0;
let high = array.length-1
let sumZero = false;
for (let i = 0; i<array.length;i++){
    if (array[low]+array[high]=== 0){
        sumZero = true;
    }else if (array[low]+array[high]<0){
        low += 1
    } else if (array[low]+array[high]>0){
        high -= 1
    }
}
console.log(sumZero)

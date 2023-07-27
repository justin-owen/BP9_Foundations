function sortByProductAndIndex(arr) {
    arr.sort((a, b) => (a * (arr.indexOf(a) + 1)) - (b * (arr.indexOf(b) + 1)));
    return arr;
  }
  
  
  const inputArray = [23, 2, 3, 4, 5];
  const sortedArray = sortByProductAndIndex(inputArray);
  console.log(sortedArray); 
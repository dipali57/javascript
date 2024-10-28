function fibonacciSequence(numTerms) {
    if (numTerms <= 0) {
        return [];
    } else if (numTerms === 1) {
        return [0];
    }

    let temp1=0;
    let temp2 = 1;
    let newAArr = [0,1];
    let sum=0;
    for(let i=0;i<numTerms-2; i++) {
      sum = temp1+temp2;
      newAArr.push(sum)
      temp1 = temp2;
      temp2 = sum;
    } 
    return newAArr;
}
    
// Example usage:
const numTerms = 10;
const fibonacciSeries = fibonacciSequence(numTerms);
console.log(fibonacciSeries); // Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

      
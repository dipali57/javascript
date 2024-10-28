function findMax(arr) {
    if (arr.length === 0) {
        return undefined; // Handle empty array case
    }
    let max = arr[0]; // Initialize max with the first element

    for(let i=0;i<arr.length ;i++) {
        if(arr[i]> max) {
            max= arr[i]
        }
    }

return max;
}

// Example usage:
const numbers = [1, 6, -33, 9, 4, 8, 2];
console.log("Maximum number is:", findMax(numbers));
        
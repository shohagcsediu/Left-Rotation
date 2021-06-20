// in this function n is the size of array and d is the amount of rotate perform
function rotateLeft(n, d) {
    for (let i = 0; i < d; i++) {
        const a = n.shift(); // The shift() method removes the first element from an array
        n.push(a) // The push() method adds elements to the end of an array
    }
    return n;
}
// arr is an array
const arr = [1, 2, 3, 4, 5];

// leftRotationPerformed is the amount of rotation
const leftRotationPerformed = 2;

// function used to get result
const result = rotateLeft(arr, leftRotationPerformed)

// show output
console.log(result);
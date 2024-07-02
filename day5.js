// Given an integer array arr and a mapping function fn, return a new array with a 
// transformation applied to each element.

// The returned array should be created such that returnedArray[i] = fn(arr[i], i).

// Please solve it without the built-in Array.map method.


// Example 1:

// Input: arr = [1,2,3], fn = function plusone(n) { return n + 1; }
// Output: [2,3,4]
// Explanation:
// const newArray = map(arr, plusone); // [2,3,4]
// The function increases each value in the array by one. 

// Example 2:

// Input: arr = [1,2,3], fn = function plusI(n, i) { return n + i; }
// Output: [1,3,5]
// Explanation: The function increases each value by the index it resides in.

// Example 3:

// Input: arr = [10,20,30], fn = function constant() { return 42; }
// Output: [42,42,42]
// Explanation: The function always returns 42.

 

// Constraints:

//     0 <= arr.length <= 1000
//     -109 <= arr[i] <= 109
//     fn returns a number

// without using the built-in array.map method - iterate over the array and apply the mapping function to each element

// define the map function, which initializes an empty array result
// iterate over each element of the input array using a for loop
// inside the loop - call the function fn with the current element and its index
// then push the result into the result arr
// return result array containing the transformed elements



function map(arr, fn) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
      result.push(fn(arr[i], i));
    }
    return result;
  }
  
  // ex 1
  let arr1 = [1, 2, 3];
  let plusone = function(n) { return n + 1; };
  console.log(map(arr1, plusone)); // output: [2, 3, 4]
  
  // ex 2
  let arr2 = [1, 2, 3];
  let plusI = function(n, i) { return n + i; };
  console.log(map(arr2, plusI)); // output: [1, 3, 5]
  
  // ex 3
  let arr3 = [10, 20, 30];
  let constant = function() { return 42; };
  console.log(map(arr3, constant)); // output: [42, 42, 42]
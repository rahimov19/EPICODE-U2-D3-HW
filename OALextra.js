// Additional assignments for Day 8

/* EXTRA 1
 Write a piece of code for reverting an array.
 es:
 [1, 3, 5] ==> [5, 3, 1]
*/

let nums = [1, 2, 3, 4, 5];
nums.reverse();
console.log("Ex1", nums);

/* EXTRA 2
 Write a piece of code for getting the maximum numerical value from an array.
*/

console.log("Ex2", Math.max(...nums));

/* EXTRA 3
 Write a piece of code for getting the minimum numerical value from an array.
*/

console.log("Ex3", Math.min(...nums));

/* EXTRA 4
 Write a piece of code for getting only even numerical values from an array.
*/

const even = nums.filter((num) => {
  return num % 2 === 0;
});
console.log("Ex4", even);

/* EXTRA 5
 Write a piece of code for deleting only even entries from an array.
*/

let valuesArr = [0, 1, 2, 3, 4, 5],
  removeValFromIndex = [0, 2, 4];

for (var i = removeValFromIndex.length - 1; i >= 0; i--)
  valuesArr.splice(removeValFromIndex[i], 1);

console.log("Ex5", valuesArr);

/* EXTRA 6
 Write a piece of code for removing all the vowels from a string.
*/

const string1 = "Abcdeog oog thoow";
// const withoutvowels = string1.filter(char !== "A");
// console.log(withoutvowels);

/* EXTRA 7
 Write a piece of code for increasing all the numerical values in a array by 1.
*/

const numsPlusOne = nums.map((num) => num + 1);
console.log("Ex7", numsPlusOne);

/* EXTRA 8 
 Replace all the strings contained in an array with their length.
 es.: ["strive", "is", "great"] => [6, 2, 5]
*/
let stringarray = ["one", "two", "aaaaaaa"];
let stringlength = [
  (stringarray[0] = stringarray[0].length),
  (stringarray[1] = stringarray[1].length),
  (stringarray[2] = stringarray[2].length),
];
console.log("Ex8", stringlength);

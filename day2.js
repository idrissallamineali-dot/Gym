//exercice-1
// sorting arrays 
function sort() {
const arr = [3, 1, 4, 1, 5, 9, 2, 6];
 return arr.sort((a,b) => a-b);
}

// sorting arrays 
function sort() {
const arr = [3, 1, 4, 1, 5, 9, 2, 6];
 return arr.sort((a,b) => b-a);
}
console.log(sort ());

//exercise-2
const a = [1, 2, 3];
const b = a;
b.push(4);
console.log(a);

// a will print  [ 1, 2, 3, 4 ] because  the  a and b have the same reference 

// exercise-3   Write code to get [20, 30, 40] out of this array — without modifying the original.
const arr = [10, 20, 30, 40, 50];
const arr1= arr.slice(1,4);
console.log(arr1)

//Exercise-4
 //Reverse the array without mutating the original. words must stay unchanged.
const words = ["hello", "world", "js", "arrays"];

const word = words.slice().reverse();

console.log(words);

console.log(word)

// Write a function sum(arr) that takes an array of numbers and returns their total — using a loop, no built-in sum method.
const arr = [10, 20, 30, 40, 50];

sum=0

for ( ar of arr){

    sum = sum+ ar    

}

console.log(sum)
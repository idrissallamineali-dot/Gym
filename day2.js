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
function  sum (arr){
    let sum=0
for ( let ar of arr){
    sum = sum+ ar    
}
return sum;
}

console.log(sum([10, 20, 30, 40, 50]));

//exercise 5
const a = [1, 2, 3];
const b = [...a];
const c = a;

b.push(4);
c.push(5);

console.log(a);
console.log(b);
console.log(c);

a= [1,2,3,5] // because a shares the same reference with c, we did not create a shallow copy 
b=[1,2,3,4] // this is a shallow copy that is why  b does not affect the original a
c=[1,2,3,5] //  this is not a shallow copy 

// exercise 6 mutation trap 
const arr = [1, 2, 3, 4, 5];
const reversed = arr.reverse();

console.log(arr);
console.log(reversed);
console.log(arr === reversed);

arr= [5,4,3,2,1]
reversed=[5,4,3,2,1]
false // because they share the same reference but they are not the same 


// ecercise-7
const arr = [10, 9, 2, 21, 3];
console.log(arr.sort());
// the output will be  [ 10, 2, 21, 3, 9 ]

// this is  not correct and  because  sort don't work the same with numbers and  string 

//for the numbers we have to specify how is it going to be sorted like this 

//const sort = (a,b) => (a-b) or b-a


// exercise 8  remove the duplicates 
//Write a function removeDuplicates(arr) that takes an array and returns a new array with all duplicates removed — without mutating the original.
removeDuplicates([1, 2, 2, 3, 4, 4, 5]) // → [1, 2, 3, 4, 5]

function removeDuplicates(arr) {
  return [...new Set(arr)];
}

/*Exercise 4: Last Elements of Array
 * Write a JavaScript function to get the last element of an array. 
 * Passing the parameter 'n' will return the last 'n' elements of the array.
 */
const arr1= (test,n) => test.slice(-n);
console.log(arr1([1, 2, 4, 0],3));


// squared 
const squared = (nums) =>  nums.map((num)=> num *num);

// to uppercase;
const squared = (words) =>  words.map((word)=> word.toUpperCase());

// users names 
const users = [
  { name: "Driss", age: 20 },
  { name: "Ali",   age: 25 },
  { name: "Sara",  age: 22 }
];
const squared = (users) => users.map((user)=> user.name);
console.log(squared(users));



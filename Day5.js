//1 merge 2 arrays 
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr= [...arr2,...arr1];


// 1 multiplys elements of an array 
function multiply(...nums) {
  const multiplied = nums.reduce((acc,current) => acc*current,1);
}
multiply(2, 3, 4); 

//const [first, ...rest] = [10, 20, 30, 40];
 first = [10]
 rest = [20,30,40]

 //What does obj2 look like? (trick question — pay attention to property order)
 const obj1 = { a: 1, b: 2 };
const obj2 = { ...obj1, c: 3, a: 99 };
//{ a: 99, b: 2, c: 3 }


//In this code, which ... is rest and which is spread? Why?
function example(a, b, ...c) {
  console.log(c);
}
example(1, 2, 3, 4, 5);

const arr = [1, 2, 3];
console.log(Math.max(...arr));
// c is rest because we use rest in argumant
// ...arr is spread  because we already have the value of arr
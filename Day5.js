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


//destructuring 
//Destructure this into three variables: c1, c2, c3.
const colors = ["red", "green", "blue"];
const [c1,c2,c3]= colors;

//Use destructuring to get the first value and skip to get the fourth value, ignoring the rest.
const arr = [10, 20, 30, 40, 50];
 const [first,,,fourth] = arr;
 console.log(first,fourth)
//Destructure name and age only.
const user = { name: "Sara", age: 22, country: "Rwanda" };
const {name,age} = user;

//  Destructure price but rename it to cost.
const product = { title: "Laptop", price: 1000 };
const {price: cost} = product;

//Destructure to get the CEO's name directly into a variable called ceoName.
const company = {
  name: "TechCorp",
  ceo: { name: "John", age: 45 }
};
 
const { ceo: { name: ceoName } } = company
console.log(ceoName)

// Call this function with an object { name: "Ali", age: 30 } and tell me what it prints.
function displayUser({ name, age }) {
  console.log(`${name} - ${age}`);
}
displayUser( { name: "Ali", age: 30 });
Ali - 30

//What are the values of volume and brightness?
const settings = { volume: 50 };
const { volume, brightness = 80 } = settings;
//50 80
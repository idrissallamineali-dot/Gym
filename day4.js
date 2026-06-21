//Return only numbers greater than 5.
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const num = nums.filter (n => n>5);
//Return a new array where each number is tripled.
const num = nums.map (n => n*3);
//Return only words that have more than 5 characters.
const num = words.filter(n => n.length>5);
//Return the product of all numbers multiplied together.
const num = nums.reduce((acc,current) => acc*current,1);
//Return only users who are 18 or older.
const num = users.filter((n) => n.age>=18);
//Return an array of just the names of users who are 18 or older.
users.filter(n => n.age >= 18).map(n => n.name)
//That's a transformation — you're going from an array of objects to an array of strings. That's exactly what map does:
//Return the sum of only the even numbers.
const num = (nums.filter( (n) => n%2==0)).reduce( (acc,current)=> acc+current,0);
//Return a new array where every sentence is capitalized.
const sentences = ["hello world", "js is great", "i love coding"];
const num = ((nums.filter( (n) => n%2!==0)).map( (a)=> a*a)).reduce( (acc,current)=> acc+current,0);
//Return the smallest number using reduce. No Math.min allowed.
const num = nums.reduce( (acc,current) => {if(acc>current) {return current} return acc })
//Return the sum of squares of only the odd numbers.
const num = ((nums.filter( (n) => n%2!==0)).map( (a)=> a*a)).reduce( (acc,current)=> acc+current,0);
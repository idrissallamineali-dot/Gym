// filter only odds numbers
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const odds = nums.filter(num  => num%2!==0 );

// filter the words with length > 3
const words = ["cat", "elephant", "dog", "rhinoceros", "ant"];
const word = words.filter (str => str.length>3)
// active users 
const users = [
  { name: "Driss", active: true },
  { name: "Ali",   active: false },
  { name: "Sara",  active: true },
  { name: "Omar",  active: false }
];
const actives = users.filter ( Activity => Activity.active== true) 

// odd numbers doubled 
const nums = [1, 2, 3, 4, 5, 6];
const doubled = (nums.filter ( num => num%2===0 )).map( double =>  double*2);

// sum of all numbers
const nums = [10, 20, 30, 40, 50];
const sum = nums.reduce( (acc,current) => acc+current , 0)

// find the largest element in the arrays
const nums = [3, 7, 2, 9, 1, 5];
const num = nums.reduce( (acc,current) => {
    if( current>acc){
        acc=current;
    }
    return acc;
},0);


// join all the words
const words = ["I", "love", "JavaScript"];
const word = words.reduce((acc,current) => acc + " "+ current);

//repeat 
const arr = [1, 2, 2, 3, 3, 3, 4];
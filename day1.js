 // 1. check if an array is an array 
const arr = [1,2,3,4 [2,4,5]];
 const arr1= Array.filter( s=> Array.isArray(s));  // the  method is Array.isArray(value);
 console.log(arr1);

 // 3. clone an array
 
const arr= [1, 2, 4, 0];
 const arr1= (arr)=>arr.slice();
 console.log(arr1(arr));


 // `slice()` creates a new array in memory, so modifying top-level values (like numbers or strings) in the clone will 
 // **not** affect the original. However, any nested arrays or objects inside will still share their references and will
 //  affect the original if modified.

 // 3. first element of an array
const arr1= (test,n) => test.slice(0,n);
console.log(arr1([1, 2, 4, 0],3));

 //  4 last element of an array
 const arr1=  (arr)=> arr[-arr.length-1];

 //5. creae function that combine array elements
 const  arr1= (arr,sep) => arr.join(sep); 

 6// find the square and sum them 
 const sum= (arr) => arr.reduce((Number,sum)=> sum+(Number*Number),0);

 
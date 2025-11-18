// map - convert or manipulate or transfer the values
// filter - return items that matches the condition
// reduce - reduces the array to a single value

let arr = [1,2,3,4,5,6,7,8]
console.log(arr.map(ele => ele**3)); // maps and manipulates the elements

console.log(arr.filter(ele => ele>5)); //filters the array elements based and on the given condition and returns the remaining elements

console.log(arr.reduce((acc , val) => acc+val , 0));


//Reduce 
let strArray = ["M","O","O","D"]
let regular_reduce = strArray.reduce((acc , val)=> acc+val , "")
let regular_reduce_right = strArray.reduceRight((acc , val) => acc+val , "")

console.log(regular_reduce +" reverse from right "+ regular_reduce_right);



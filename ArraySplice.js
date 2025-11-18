var arr = [10,12.45,true,"Harshith"]
console.log(arr);
arr.splice(2,1)
console.log(arr);
// using splice we can remove specific element from the array
// can replace a particular element from the array

var arr = [10,12.45,true,"Harshith"]
console.log(arr);
delete(arr[2]) // empty element
console.log(arr);

//adding element into the array using splice
var arr = [10,12.45,true,"Harshith"]
console.log(arr);
arr.splice(2,0,99.99,"Java")
console.log(arr);


//replacing the elements from the array
var arr = [10,12.45,true,"Harshith"]
console.log(arr);
arr.splice(2,2,99.99,"Java")
console.log(arr);

let new_arr = [10,20,30,40,50,60]
let popped_element = new_arr.splice(1,1)
console.log(popped_element);







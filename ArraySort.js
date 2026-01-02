let ar =[10,2,65]
console.log(ar.sort()); // numbers sort
//by default js sort method sort the data as string

//since "10" < "2" comes before 2 it is not going to swap
console.log(ar.sort((a,b)=> a-b)); //user defined functionality

//for descending order
console.log(ar.sort((a,b)=> b-a ));


let names = ["sunil" , "harshith", "abhi"]
console.log(names.sort());

//compound functions
console.log(names.sort().reverse());

//jagged arrat is a nested array
let nested_array = [1,[2,3],[4,5,6,[7,8,9]],]
//falt(1)  flats upto 1 level
var flattened_array1 = nested_array.flat(1);
console.log(nested_array);

//flat(2) flats upto 2 levels
var flattened_array = nested_array.flat(2);
console.log(flattened_array);

console.log(flattened_array1.flatMap(ele =>  ele*ele));


var flattened_array_map = flattened_array.flatMap(ele =>  ele*ele)
console.log(flattened_array_map);

console.log(flattened_array.flatMap(ele => [ele , ele*ele]));

//console.log(flattened_array.flatMap(ele => [ele , ele*ele]).join("->"));



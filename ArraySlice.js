let arr = [1,23,45,67,87,54,33]
console.log(arr.slice(2,5)); //gives the sub array bw the given index

//Search
console.log(arr.indexOf(87));
console.log(arr.indexOf(20)); //not a proper value of the array

console.log(arr.lastIndexOf(87));
console.log(arr.lastIndexOf(870));

console.log(arr.includes(87));
console.log(arr.includes(870));

console.log(arr.find(n => n> 40)); // gives the value just greater than 40
console.log(arr.findIndex(n => n> 40)); // gives the index of the element just greater than 40

console.log(arr.findLast(n => n>50));  //finds the elemet which is just greater than 50 but from the last
console.log(arr.findLastIndex(n => n>50)); // finds the index of the element which is just greater than 50 but from the last

for(let i = 0 ; i<arr.length ; i++){
    console.log(arr[i]+" ");
    
}

console.log(arr.join(", "));

//using forEach method
arr.forEach(ele => console.log(ele))

//foreach
// in wrt to forEach loop for the array gives the indexes 
for( ele in arr)
{
    console.log(ele);  // gives the indexes of the array
}


// of in forEach loop whith respect to array represents the elements
for(ele of arr)
{
    console.log(ele); // gives the exact elements of the array 
}

for( ind in arr)
{
    console.log(arr[ind]);
    
}





let marks = [100,99,98,87,88];
console.log(marks);
console.log(marks.length);
console.log(typeof marks);


// let heros = ["harshith" , "pavan" , "abhi"]
// console.log(heros);
marks[0] = 96;
for(let i in marks)
{
console.log(marks[i]);
}

//average
let sum = 0;
for(let i =0 ; i<marks.length ; i++)
{
    sum+=marks[i];
}

let average = sum/marks.length;

console.log(average);







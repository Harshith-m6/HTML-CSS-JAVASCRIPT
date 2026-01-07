let student = {
    name : "harshith",
    age : 23,
    marks : 99

};

console.log(student.name);
console.log(student["name"]);
student.age = 22;
console.log(student);
student.age=23;
console.log(student);
delete student.age;
console.log(student);

//traverse object

for(let i in student)
{
    console.log(`${i} : ${student[i]}`);
    
}
let arr =[];
for(let i in student)
{
    arr.push(student[i]);
}
console.log(arr);

let array =[];
for(let i in student)
{
    array[array.length] = [i , student[i]]
}
console.log(array);

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


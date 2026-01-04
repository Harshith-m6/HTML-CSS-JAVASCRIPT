//object creation using json string
let jsonString = '{"name":"harshith","designation":"Data Scientist"}'
let emp = JSON.parse(jsonString)
console.log(emp.name);
console.log(emp.designation);


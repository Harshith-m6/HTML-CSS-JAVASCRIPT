let employee = new Object();
employee.empno = 1234
employee.empname = "harshith"
employee.desgination = "data scientist"
employee.displayDetails = function()
{
    console.log("new object creation");
    console.log(`${this.empno}|${this.empname}|${this.desgination}`);

};

console.log(employee.empno);
console.log(employee.empname);
console.log(employee.desgination);
employee.displayDetails()



function createEmployee(empno , empname , designation)
{
    return {
        empno,
        empname,
        designation,
        display(){
            console.log(" ");
            console.log(`${this.empno} | ${this.empname} | ${this.designation}`);
        }
    };
}

emp1 = createEmployee(1234,"Harshith","Data Scientist")
emp1.display()
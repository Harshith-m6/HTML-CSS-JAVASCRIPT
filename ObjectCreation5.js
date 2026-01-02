// object creation based on the prototype
const protoEmployee = {
    display : function(){
        console.log("Object.Create Prototype");
        console.log(`${this.empno}|${this.empname}|${this.empdesignation}|${this.empdepartment}`);
    }
};

let e1 = Object.create(protoEmployee)
e1.empno = 11;
e1.empname = "Harshith";
e1.empdesignation = "data scientist"
e1.display();

let e2 = Object.create(protoEmployee)
e2.empno = 102;
e2.empname = "Harshithh"
e2.empdesignation = "Software engineer";
e2.empdepartment = "development";
e2.display();

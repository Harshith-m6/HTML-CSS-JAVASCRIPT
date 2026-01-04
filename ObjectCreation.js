// first way to create an object
// //object literak
/* syntax:  {

     property : value
     behavior : function expression

 } */

     let employee = {
        empno : 1234,
        empname : "Harshith",
        desgination : "data scientist",

        displayDetails : function(){
            console.log("hello all");
            console.log(`${this.empno}|${this.empname}| ${this.desgination}| `);
            
            
        }
     };

     console.log(employee.empno);
     console.log(employee.empname);
     console.log(employee.desgination);
     employee.displayDetails()
     
     
     


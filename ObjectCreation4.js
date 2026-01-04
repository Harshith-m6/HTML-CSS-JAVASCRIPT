// object creation using class (ES6)
class Student{

    constructor(studentId , studentName , studentMarsks)
    {
        this.studentId = studwntId;
        this.studentName = studentName
        this.studentMarsks =studentMarsks
    }

    display(){
        console.log("using ES6 class");
        
        console.log(`${this.studwntId} | ${this.studentName}|${this.studentMarsks}`);
        
    }
};

let student1 = new Student(101 , "Rahul" , 99.99)
let student2 = new Student(102 , "Tanishq" , 98.00)

student1.display();
student2.display();
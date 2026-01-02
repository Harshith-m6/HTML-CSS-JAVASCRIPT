console.log("Apna College");
console.log("Apna College");
console.log("Apna College");

for(var i = 100 ; i>=1 ; i--)
{
    console.log("Apna College");
}

if(i==0)
{
    console.log("loop has ended");
    
}

//sum of first 5  nums

let sum =0;
for(let i =1 ; i<= 5 ; i++)
{
    sum+=i;
}
console.log(sum);

let a = 1;
while(a<=5)
{
    console.log(a+" ");
    a++;
    
}

//do while
let x = 10;
do{
    console.log(x);
    x--;
}while(x>=0);


//for-of loop
let str = "harshith";
for(let val of str)
{
    console.log(val); 
}

//for-in loop  
// for in loop for objects

let student={
    name : "harshith",
    age : 22,
    course : "JavaScript"
};

for(let i in student)
{
    console.log(i); console.log(student[i]);    
}

//print all even numbers from 0 to 100

for(let i =1 ; i<=100 ; i++ )
{
    if(i%2===0)
    {
        console.log(i+" is even");
    }else{
        console.log(i+" is odd");
    }
}

//practice question 2
//guess the game number
let num = prompt("enter the number");
let number = 10;
while(num !== number);
{
    num = prompt("Enter again u enter the wrong number");
}
console.log("congrats u entered the correct  number");






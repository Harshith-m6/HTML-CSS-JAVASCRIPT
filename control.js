let age = 20;
if(age>=18)
{
    console.log("Adult")
}else{
    console.log("Minor");
    
}

let n = 2;
if(n%2===0)
{
    console.log("even");
}else{
    console.log("odd");
    
}

//largest of 3 nums

let a = 10 , b=20 , c =135;
if(a>b && a>c)
{
    console.log("a is greater");
}else if(b>a && b>c)
{
    console.log("b is greater");
}else{
    console.log("C is greater");
}

//switch

let day = 3;
switch(day){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
         break;
    case 3:
        console.log("Wednesday");
        break;
     case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
         break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day");
        
    
        
}


prompt("enter a number");
let num = prompt("Enter a number")
console.log(num%3===0?"multiple of 3":"Not a multiple of 3");

let score = prompt("enter your marks")
let grade ;
if(score>=90 && score<=100)
{
    grade = "A"
}else if(score>=80 && score<90)
{
    grade = "B"
}else if(score >=70 && score < 80)
{
    grade = "C"
}else {
    grade = "D"
}

console.log(grade);


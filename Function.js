function myFunc(){
    console.log("Iam learning Js");
}
myFunc(); //invoking the function

function intro(name) //parameter
{
    console.log(`My name is ${name}`);  
}

intro("harshith"); //argument

function salary(age , sal)
{
    console.log(`My salary is ${age*sal}`);
}

salary(22 , 100000);

// Arithmatic

function sum(x , y)
{
    console.log(`sum is ${x+y}`); 
}

sum(10,2);

//functions returns the values

function prod(x,y)
{
    return x*y;
}

let prods = prod(10,17);
console.log(`product is ${prods}`);

//Arrow function

const sums = (a,b) =>{ return a+b;};

const mul = (x,y)=>{return x*y}

// function that returns vowels

function vowels(string)
{
    let count =0;
    let str = string.toLowerCase();
    for(let i of str)
    {

        switch(i)
        {
            case "a" :
            case "e" :
            case "i":
            case "o":
            case "u":
            console.log(`${i} is vowel`);
            count++;
            break;
            default : 
            break; 
        }
    }
    console.log(`Number of vowels is ${count}`);
}

vowels("aaaaaa");

const vow = (string) => {
    let count =0;
    let str = string.toLowerCase();
    for(let i of str)
    {
        if(i === "a" ||i === "e"|| i === "i"||i === "o"||i === "u" )
        {
            count ++;
            console.log(`${i} is a vowel`);
        }
    }
    console.log(`${count} number of vowels are present in the string` ); 
}

vow("ABHI");

//forEach and callback function

let arr = ["pavan" , "abhi" , "harshith"];

arr.forEach(val=> console.log(val)
);

//forEach array
let array =[1,2,3,4,5];

array.forEach(function print(val){console.log(val);
})
//using forEach print square of the ecah numbers

let numArr = [1,2,3,4,5,6];

numArr.forEach((val)=>{ console.log(val*val); // for squate val**2 can be also write
});

//map method

let ar1 = [1,2,3,4,5];
let ar2 = ar1.map((val)=>{return val**2});
console.log(ar2); // array is printed on the console

//filer array : filter the array and creates a copy of the array with filtered elements

let ar11 = [1,2,3,4,5,6,7,8,9];
let ar22 = ar11.filter((val)=> { return val%2===0})
console.log(ar22);

//reduce 

let arrs = [1,2,30,4,5,6,7];
const adds  = arrs.reduce((res , curr) => {return res+curr;});
console.log(adds);


const large = arrs.reduce((prev , curr)=>{return prev>curr?prev:curr;});
console.log(large);

let high = arrs.filter((val)=> {return val>4});
console.log(high);

//Assignment

let n = 5;
let a1 =[];
for(let i=1 ; i<=n ; i++)
{
 a1[i-1] = i;
}

console.log(a1);


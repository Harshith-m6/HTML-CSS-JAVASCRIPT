let arr= [1,2,4,6,3,7,8,9,0,3,5,0];
let isPresent = false;
let num =1;
for(let i of arr)
{
    if(num===i)
    {
        isPresent=true;
        break;
    }
}
console.log(isPresent?"Element is Present":"element is not present");

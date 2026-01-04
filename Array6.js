let arr = [1,1,2,2,3,4,5,6];
let newArr =[];
for(let i of arr)
{
    if(newArr.indexOf(i)===-1)
    {
        newArr.push(i);
    }
}
console.log(newArr);


let unique =[];
for(let i of arr)
{
    if(!unique.includes(i))
    {
        unique.push(i);
    }
}
console.log(unique);


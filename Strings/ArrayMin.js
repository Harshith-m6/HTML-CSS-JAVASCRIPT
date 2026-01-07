let arr = [1,2,3,40,4,-1,50,0];
let min = Infinity;
for(let i of arr)
{
    if(i<min)
    {
        min =i;
    }
}
console.log(min);

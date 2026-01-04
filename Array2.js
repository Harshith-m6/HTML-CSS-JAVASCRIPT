let arr =[9,8,1,2,4,3,0,3,0,-1];
let min = arr[0];
for(let i of arr)
{
    if(i<min)
    min=i;
}
console.log(min);

let a = [1,1,3,2,4,6,5,7,9,8,7];
let max = -Infinity;
let smax = -Infinity;
for(let i of a)
{
    if(i > max)
    {
        let temp = max ;
        max = i;
        smax = temp;
    }else if( i> smax && i!==max )
    {
        smax = i;
    }
}
console.log(smax);

let arr = [1,2,3,4,5,6,1,2,3,4,9];
let uni =[];
for(let i =0 ; i<arr.length ; i++)
{
    let dup = false;
    for(let j =0 ; j<uni.length ; j++)
    {
        if(arr[i]===uni[j])
        {
            dup = true;
            break;
        }
    }
    if(!dup)
    {
        uni.push(arr[i])
    }
}
console.log(uni);

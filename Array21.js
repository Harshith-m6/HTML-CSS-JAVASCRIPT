let arr =[1,1,2,2,3,9,1,2,3];
let newArr = [];
for(let i=0; i<arr.length ; i++)
{
    if(newArr.includes(arr[i]))
        continue;
    for(let j =i+1 ; j<arr.length ; j++)
    {
        if(arr[i]!==arr[j])
        {
            newArr.push(arr[i]);
            break;
        }
    }
}
console.log(newArr);



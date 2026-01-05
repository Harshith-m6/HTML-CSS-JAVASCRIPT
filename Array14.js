let arr = [8,0,9,6,5,0,4,3,2,1,3,5,1,7];
for(let i=1 ; i< arr.length ; i+=2)
{
    for(let j = i+2 ; j<arr.length; j+=2)
    {
        if(arr[i]<arr[j])
        {
            let temp = arr[i];
            arr[i]=arr[j]
            arr[j]=temp
        }
    }
}
console.log(arr);

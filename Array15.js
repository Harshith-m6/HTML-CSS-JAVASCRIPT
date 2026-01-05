let arr = [9,5,7,3,4,6,1,3,6,8,3,5,7];
for(let i=0 ; i<arr.length ; i++)
{
    if(i%2===0)
    {
        for(let j =i+2 ; j<arr.length ; j+=2)
        {
            if(arr[i]>arr[j])
            {
                let temp = arr[i]
                arr[i]=arr[j]
                arr[j]=temp
            }
        }
    }
    else
    {
         for(let j =i+2 ; j<arr.length ; j+=2)
        {
            if(arr[i]<arr[j])
            {
                let temp = arr[i]
                arr[i]=arr[j]
                arr[j]=temp
            }
        }
    }
}
console.log(`even indexes ascending and odd index descending ${arr}`);

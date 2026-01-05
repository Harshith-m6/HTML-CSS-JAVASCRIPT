let arr = [1,5,10,4,2,3,0,2,0,1];
for(let i =0 ; i< arr.length ; i+=2 )
{
    for(let j = i+2 ; j<arr.length ; j+=2)
    {
        if(arr[i]>arr[j]){
            let temp = arr[i];
            arr[i]=arr[j];
            arr[j]=temp;
        }
    }
}
console.log(arr);

let ar = [5,4,3,2,1];
for(let i =0 ; i< ar.length ; i++)
{
    for(let j=0 ; j<ar.length-i-1;j++)
    {
        if(ar[j]>ar[j+1])
        {
            let temp = ar[j];
            ar[j]=ar[j+1]
            ar[j+1]=temp;
        }
    }
}
console.log(ar);

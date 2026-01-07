let ar = [0,5,0,4,0,3,0,2,0,1];
for(let i =1; i<ar.length ; i+=2)
{
    for(let j =i+2 ; j<ar.length ; j+=2)
    {
        if(ar[i]>ar[j])
        {
            let temp = ar[i]
            ar[i]=ar[j]
            ar[j]=temp
        }
    }
}
console.log(ar);

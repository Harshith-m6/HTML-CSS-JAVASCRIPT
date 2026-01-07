let ar = [4,2,3,4,2,3,4,6,5,3,4,7,8,9,1,2,4,4];
for(let i =0 ;i<ar.length ; i++)
{
    if(i%2===0)
    {
        for(let j =i+2 ; j<ar.length ; j+=2)
        {
            if(ar[i]>ar[j])
            {
                let temp =ar[i]
                ar[i]=ar[j]
                ar[j]= temp;
            }
        }
    }else{
           for(let j =i+2 ; j<ar.length ; j+=2)
        {
            if(ar[i]<ar[j])
            {
                let temp =ar[i]
                ar[i]=ar[j]
                ar[j]= temp;
            }
        }
    }
}
console.log(ar);

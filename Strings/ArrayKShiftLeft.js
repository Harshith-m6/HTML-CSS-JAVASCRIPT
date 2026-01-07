let ar = [1,2,3,4,5];
let n = 2;
n=n%ar.length;
for(let k =0 ; k<n ; k++)
{
    let first = ar[0];
    for(let i =0 ; i<ar.length-1 ; i++)
    {
        ar[i]=ar[i+1];
    }
    ar[ar.length-1]=first;
}
console.log(ar);


let ar = [1,2,3,4,5]
let n =2;
n=n%ar.length;
for(let k =0 ; k<n ; k++)
{
    let last = ar[ar.length-1];
    for(let i =ar.length-1 ; i>0 ; i-- )
    {
        ar[i]=ar[i-1];
    }
    ar[0]=last;
}
console.log(ar);

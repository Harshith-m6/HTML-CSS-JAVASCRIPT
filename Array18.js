let arr = [1,2,3,4,5,6,7];
let n = 2;
n=n%arr.length;
for(let k =0 ; k<n ; k++)
{
    let first = arr[0];
    for(let i = 0 ; i< arr.length-1 ; i++)
    {
        arr[i]=arr[i+1];
    }
    arr[arr.length-1]=first
}
console.log(arr);


let array = [1,2,3,4,5,6];
n=n%array.length;
for(k=0;k<n ; k++)
{
    let last = array[array.length-1];
    for(let i = array.length-1 ; i>0 ;i--)
    {
        array[i]=array[i-1];
    }
    array[0] = last;
}
console.log(array);


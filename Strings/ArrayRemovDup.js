function unique(arr)
{
    let uni = [];
    for(let i =0 ; i<arr.length ; i++)
    {
        let contains = false;
        for(let j =0 ; j< uni.length ; j++ )
        {
            if(uni[j]===arr[i] )
            {
                
                contains= true;
                break;
            }
        }
        if(!contains)
        {
            uni.push(arr[i]);
        }
    }
    return uni;
}

console.log(unique([1,2,3,1,2,3]));

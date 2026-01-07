function findDup(arr)
{
    let dup =[];
    
    for(let i =0 ; i< arr.length ; i++)
    {
        let found=false;
        for(let j =i+1 ; j<arr.length ; j++)
        {
            if(arr[i]===arr[j])
            {
                found = true;
                break;
            }
        }
          
        if(found)
        {
             let present = false;
         
            for(let k=0 ; k<dup.length ; k++)
            {
                if(arr[i]===dup[k])
                {
                    present = true;
                    break;
                }
            }
        
            if(!present)
            {
                dup.push(arr[i])
            }
        }
        
    }
    return dup;
}

console.log(findDup([1,2,3,4,5,1,2]));

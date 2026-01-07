let arr = [1,1,2,1];

let present = [];

for(let i =0 ; i<arr.length ; i++)
{
    
    if(present.includes(arr[i]))
         continue;
      
       
    let count =1;
   

    for(let j=i+1 ; j<arr.length ; j++)
    {
        if(arr[i]===arr[j])
        {
            count++;
        }
        
    }
     present.push(arr[i]);

     console.log(`${arr[i]} present ${count} times`);
    
}  
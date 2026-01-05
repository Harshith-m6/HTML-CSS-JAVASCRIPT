let str = "programming";
let visited ="";
for(let i =0 ; i<str.length ; i++)
{
    let count =1;
    if(visited.includes(str[i]))
        continue;
    for(let j = i+1 ; j<str.length ; j++)
    {
        if(str[i]===str[j])
        {
            count++;
        }
    }
    console.log(`${str[i]} is present ${count} times`);
    visited+=str[i];
}
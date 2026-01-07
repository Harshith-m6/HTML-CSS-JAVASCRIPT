let ar = [1,2,3,1,2,3];
let obj = {};
for(let i of ar)
{
    if(obj[i]===undefined)
    {
        obj[i]=1;
    }else{
        obj[i]++;
    }
}

for(let key in obj)
{
    if(obj[key]>1)
    {
        console.log(` ${key} repeated  ${obj[key]} times`);
        
    }
}
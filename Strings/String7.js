let Str = "Programming";
let freq ={};
for(let i of Str)
{
    if(freq[i]===undefined)
    {
        freq[i]=1;
    }else{
        freq[i]++;
    }
}

console.log(freq);

for(let i in freq)
{
    if(freq[i]>1)
    {
        console.log(i , "->" , freq[i]);
        
    }
}

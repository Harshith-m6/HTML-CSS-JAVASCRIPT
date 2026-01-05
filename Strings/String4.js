let str = "HellOOO";
let strl =str.toLowerCase();
let Count =0;
for(let i of strl)
{
    if(!(i==='a'||i==='e'||i==='i'||i==='o'||i==='u'))
    {
        Count++;
    }
}
console.log(`Number of conconants in the String ${str} is ${Count}`);